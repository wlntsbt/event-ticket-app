import { Router } from 'express';
const router = Router();

import { newEvent, newTicket } from './eventController';
import { uploader } from '@/middleware/uploader';

router.post('/new', uploader, newEvent);
router.post('/ticket', newTicket);

export default router;
