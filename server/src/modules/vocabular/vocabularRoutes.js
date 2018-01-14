import { Router } from 'express';

import {
  vocabularGetAll,
  vocabularCreate,
  vocabularGetById,
  vocabularGetByParams,
  vocabularUpdateById,
  vocabularDeleteById,
} from './vocabularControllers';

const router = Router();

router.get('/', vocabularGetAll);
router.post('/', vocabularCreate);
router.get('/:vocabularId', vocabularGetById);
router.post('/params', vocabularGetByParams);
router.patch('/:vocabularId', vocabularUpdateById);
router.delete('/:vocabularId', vocabularDeleteById);

export default router;
