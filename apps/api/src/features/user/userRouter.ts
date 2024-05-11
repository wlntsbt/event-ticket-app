import { Router } from 'express';
const router = Router();

import { getUserPointsAndVouchers, getAllUserTransactions } from './userController';

router.get('/promos', getUserPointsAndVouchers);
router.get('/transactions', getAllUserTransactions);

export default router;
