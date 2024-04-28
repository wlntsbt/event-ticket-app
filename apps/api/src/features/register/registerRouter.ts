import { Router } from 'express';

const router = Router();

import { newPromoter, newAttendee, codeChecker } from './registerController';

router.post('/promoter', newPromoter);
router.post('/user', newAttendee);
router.get('/code/:code', codeChecker);
export default router;
