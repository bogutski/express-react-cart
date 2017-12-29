import { Router } from 'express';
import userCheckAuth from './userCheckAuth';
import {
  userGetAll,
  userCreate,
  userLogin,
  userGetById,
  userDeleteById,
} from './userControllers';


const router = Router();

router.get('/', userGetAll);
router.post('/', userCreate);
router.post('/login', userLogin);
router.get('/:userId', userCheckAuth, userGetById);
router.delete('/:userId', userCheckAuth, userDeleteById);

// Not active
// router.patch('/:userId', userUpdateById);

export default router;
