import { Router } from 'express';
const router = Router();

import { getUserPointsAndVouchers } from './userController';

router.get('/', getUserPointsAndVouchers);

export default router;
