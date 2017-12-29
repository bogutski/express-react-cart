import { Router } from 'express';

import {
  userGetAll,
  userCreate,
  userLogin,
} from './userControllers';

const router = Router();

router.get('/', userGetAll);
router.post('/', userCreate);
router.post('/login', userLogin);

// Not active
// router.get('/:userId', userGetById);
// router.patch('/:userId', userUpdateById);
// router.delete('/:userId', userDeleteById);

export default router;
