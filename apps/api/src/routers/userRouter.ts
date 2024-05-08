import express, { Router } from 'express';

// Define Router
const userRouter = Router();
userRouter.use(express.json()); // Body Parser

import BillRouter from '@/features/ticket/ticketRouter';
import PromoRouter from '@/features/user/userRouter';

userRouter.use('/bill', BillRouter);
userRouter.use('/promos', PromoRouter);
export default userRouter;
