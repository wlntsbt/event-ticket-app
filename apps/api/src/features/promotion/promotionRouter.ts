import { Router } from 'express';
const router = Router();

import { newPromo } from './promotionController';

router.post('/', newPromo);

export default router;
