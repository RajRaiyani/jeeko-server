import { NextFunction, Request, Response } from 'express';
import { DatabaseClient } from '@/service/database/index.js';
import { z } from 'zod';

export const ValidationSchema = {
  params: z.object({
    id: z.uuid({ version: 'v4', message: 'Invalid product ID' }),
  }),
  body: z.object({
    category_id: z.uuid({ version: 'v4', message: 'Invalid category ID' }),
    name: z
      .string()
      .trim()
      .nonempty('Name is required')
      .min(3, 'Name must be at least 3 characters')
      .max(255, 'Name must be less than 255 characters'),
    description: z
      .string()
      .trim()
      .max(2000, 'Description must be less than 2000 characters')
      .optional(),
    tags: z.array(z.string()).max(20, 'Maximum 20 tags allowed').default([]),
    metadata: z.object({}).default({}),
    sale_price: z
      .number()
      .int()
      .min(0, 'Sale price must be greater than or equal to 0').transform(val => Math.round(val*100)),
    image_id: z.uuid({ version: 'v4', message: 'Invalid image ID' }),
  }),
};

export async function Controller(
  req: Request,
  res: Response,
  next: NextFunction,
  db: DatabaseClient,
) {
  const { id } = req.params as z.infer<typeof ValidationSchema.params>;
  const {
    category_id,
    name,
    description,
    tags,
    metadata,
    sale_price,
    image_id,
  } = req.body as z.infer<typeof ValidationSchema.body>;

  try {
    // Check if product exists
    const existingProduct = await db.queryOne<{ id: string }>(
      'SELECT id FROM products WHERE id = $1',
      [id],
    );

    if (!existingProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Check if category exists
    const category = await db.queryOne<{ id: string }>(
      'SELECT id FROM product_categories WHERE id = $1',
      [category_id],
    );

    if (!category) {
      return res.status(400).json({ error: 'Invalid category' });
    }

    // Check if another product with same name exists
    const duplicateProduct = await db.queryOne<{ id: string }>(
      'SELECT id FROM products WHERE name = $1 AND id <> $2',
      [name, id],
    );

    if (duplicateProduct) {
      return res
        .status(400)
        .json({ error: 'Product with this name already exists' });
    }

    await db.query('BEGIN');

    // Update product
    const updatedProduct = await db.queryOne(
      `
      UPDATE products
      SET
        category_id = $1,
        name = $2,
        description = $3,
        tags = $4,
        metadata = $5,
        sale_price = $6,
        updated_at = now()
      WHERE id = $7
       RETURNING *`,
      [
        category_id,
        name,
        description || null,
        tags || [],
        metadata || {},
        sale_price,
        id,
      ],
    );

    const currentPrimaryImage = await db.queryOne('select image_id from product_images where product_id = $1 and is_primary = $2', [id, true]);
    if (currentPrimaryImage) {
      await db.query('UPDATE files SET _status = $1 WHERE id = $2', [
        'deleted',
        currentPrimaryImage.image_id,
      ]);
      await db.query('DELETE FROM product_images WHERE product_id = $1 and is_primary = $2', [id, true]);
    }

    // Insert or update images
    await db.query(
          `INSERT INTO product_images (product_id, image_id, is_primary)
          VALUES ($1, $2, $3)`,
          [id, image_id, true],
        );

    await db.query('UPDATE files SET _status = $1 WHERE id = $2', [
      'saved',
      image_id,
    ]);

    await db.query('COMMIT');

    return res.status(200).json(updatedProduct);
  } catch (error) {
    await db.query('ROLLBACK');
    return next(error);
  }
}

