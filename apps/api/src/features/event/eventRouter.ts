import { Router } from 'express';
const router = Router();

import { newEvent, newTicket } from './eventController';

router.post('/new', newEvent);
router.post('/ticket', newTicket);

export default router;
