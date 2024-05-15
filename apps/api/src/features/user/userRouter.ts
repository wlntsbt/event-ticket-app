import { Router } from 'express';
const router = Router();

import {
  getUserPointsAndVouchers,
  getAllUserTransactions,
  getUserInfo,
  getAllUserReview,
} from './userController';

router.get('/promos/:id', getUserPointsAndVouchers);
router.get('/transactions', getAllUserTransactions);
router.get('/', getUserInfo);
router.get('/reviews', getAllUserReview);

export default router;
