import { Router } from 'express';
const router = Router();

import {
  newEvent,
  newTicket,
  allEventsByPromoter,
  checkDefinedEnum,
  publishEvent,
} from './eventController';
import { uploader } from '@/middleware/uploader';

router.post('/new', uploader, newEvent);
router.post('/ticket', newTicket);
router.get('/all-events', allEventsByPromoter);
router.get('/variables', checkDefinedEnum);
router.patch('/publish', publishEvent);

export default router;
