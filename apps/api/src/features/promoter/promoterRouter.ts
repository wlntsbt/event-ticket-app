import { Router } from 'express';
const router = Router();

import { getPromoterInfo } from './promoterController';

router.get('/', getPromoterInfo);

export default router;
