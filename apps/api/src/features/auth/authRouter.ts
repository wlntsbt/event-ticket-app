import { Router } from 'express';

// Define Router
const router = Router();

// Import Controller
import { login } from './authController';

router.post('/login', login);

export default router;
