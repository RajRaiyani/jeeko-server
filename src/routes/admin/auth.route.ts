import express from 'express';
import {validate} from '@/utils/validationHelper.js';
import WithDatabase from '@/utils/withDatabase.js';

import { ValidationSchema as loginValidationSchema, Controller as loginController } from '@/components/admin/auth/login.js';

const router = express.Router();

router.post('/login', validate(loginValidationSchema), WithDatabase(loginController));

export default router;
