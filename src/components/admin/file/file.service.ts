import { DatabaseClient } from "@/service/database/index.js";

export async function CreateNewFile(db: DatabaseClient, {key, size}: {key:string, size?: number| null}) {
  const file = await db.queryOne('INSERT INTO files (key, size) VALUES ($1, $2) RETURNING *', [key, size]);
  return file;
}
