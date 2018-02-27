import { Router } from 'express';
import userCheckAuth from './userCheckAuth';
import {
  userGetAll,
  userCreate,
  userLogin,
  userGetById,
  userDeleteById,
} from './userControllers';

import { updateShipping } from './profile/profileControllers';

const router = Router();

// USER
router.get('/', userCheckAuth, userGetAll);
router.post('/', userCreate);
router.post('/login', userLogin);
router.get('/:userId', userCheckAuth, userGetById);
router.delete('/:userId', userCheckAuth, userDeleteById);

// PROFILE
router.patch('/shipping/:userId', updateShipping);

// Not active
// router.patch('/:userId', userUpdateById);

export default router;
