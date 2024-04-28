import express, { Router } from 'express';
import cors from 'cors';
// Define Router
const router = Router();
router.use(cors());
router.use(express.json()); // Body Parser

import RegisterRouter from '../features/register/registerRouter';
import AuthRouter from '../features/auth/authRouter';
import promoterRouter from './promoterRouter';
import { tokenVerify } from '@/helpers/token';
import { promoterVerify } from '@/middleware/roleVerify';

router.use('/register', RegisterRouter);
router.use('/auth', AuthRouter);
router.use('/promoter', tokenVerify, promoterVerify, promoterRouter);

export default router;
