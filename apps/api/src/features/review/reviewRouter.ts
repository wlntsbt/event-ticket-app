import { Router } from 'express';

const router = Router();

import { newReview } from './reviewController';

router.post('/', newReview);

export default router;
