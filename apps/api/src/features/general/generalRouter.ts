import { Router } from 'express';
const router = Router();

import { getAllEvents, getEvent, getEventSearch } from './generalController';

router.get('/all-events', getAllEvents);
router.get('/event/:id', getEvent);
router.get('/search', getEventSearch);

export default router;
