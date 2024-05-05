import express, { Router } from 'express';

// Define Router
const userRouter = Router();
userRouter.use(express.json()); // Body Parser

import BillRouter from '@/features/ticket/ticketRouter';

userRouter.use('/bill', BillRouter);

export default userRouter;
