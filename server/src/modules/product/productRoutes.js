import { Router } from 'express';
import {
  productGetAll,
  productCreate,
  productGetById,
  productUpdateById,
  productDeleteById,
} from './productControllers';

const router = Router();

router.get('/', productGetAll);
router.post('/', productCreate);
router.get('/:productId', productGetById);
router.patch('/:productId', productUpdateById);
router.delete('/:productId', productDeleteById);

export default router;
