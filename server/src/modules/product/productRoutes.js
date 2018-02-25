import { Router } from 'express';
import upload from './../fileUpload/fileUpload';

import {
  productCreate,
  productDeleteById,
  productLoadAll,
  productGetByCategoryId,
  productGetById,
  productUpdateById,
} from './productControllers';

const router = Router();

router.get('/', productLoadAll);
router.post('/', upload.array('image', 20), productCreate);
router.get('/:productId', productGetById);
router.get('/category/id/:categoryId', productGetByCategoryId);
router.patch('/:productId', upload.array('image', 20), productUpdateById);
router.delete('/:productId', productDeleteById);

export default router;
