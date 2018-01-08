import { Router } from 'express';

import {
  vocabularGetAll,
  vocabularCreate,
  vocabularGetById,
  vocabularUpdateById,
  vocabularDeleteById,
} from './vocabularControllers';

const router = Router();

router.get('/', vocabularGetAll);
router.post('/', vocabularCreate);
router.get('/:vocabularId', vocabularGetById);
router.patch('/:vocabularId', vocabularUpdateById);
router.delete('/:vocabularId', vocabularDeleteById);

export default router;
