import { Router } from 'express';
const router = Router();

import {
  getLocationList,
  getBillingStatusList,
  getCategoryList,
  getPointStatusList,
  getRoleList,
} from './enumController';

router.get('/location', getLocationList);
router.get('/billing-status', getBillingStatusList);
router.get('/category', getCategoryList);
router.get('/point-status', getPointStatusList);
router.get('/role', getRoleList);

export default router;
