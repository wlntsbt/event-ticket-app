import express, { Router } from 'express';

// Define Router
const userRouter = Router();
userRouter.use(express.json()); // Body Parser

import BillRouter from '@/features/ticket/ticketRouter';
import DataRouter from '@/features/user/userRouter';
import ReviewRouter from '@/features/review/reviewRouter';

userRouter.use('/bill', BillRouter);
userRouter.use('/data', DataRouter);
userRouter.use('/review', ReviewRouter);
export default userRouter;
