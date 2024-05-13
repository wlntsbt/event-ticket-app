import { Router } from 'express';
const router = Router();

import {
  getUserPointsAndVouchers,
  getAllUserTransactions,
  getUserInfo,
} from './userController';

router.get('/promos', getUserPointsAndVouchers);
router.get('/transactions', getAllUserTransactions);
router.get('/', getUserInfo);


export default router;
