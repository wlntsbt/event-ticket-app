import { Router } from 'express';

// Define Router
const router = Router();

// Import Controller
import { login, persist } from './authController';
import { tokenVerify } from '@/helpers/token';
router.post('/login', login);
router.post('/persist', tokenVerify, persist);

export default router;
