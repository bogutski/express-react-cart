import { Router } from 'express';
import upload from './../fileUpload/fileUpload';

import {
  productGetAll,
  productCreate,
  productGetById,
  productUpdateById,
  productDeleteById,
  productGetByCategoryId,
} from './productControllers';

const router = Router();

router.get('/', productGetAll);
router.post('/', upload.array('image', 20), productCreate);
router.get('/:productId', productGetById);
router.get('/category/id/:categoryId', productGetByCategoryId);
router.patch('/:productId', productUpdateById);
router.delete('/:productId', productDeleteById);

export default router;
