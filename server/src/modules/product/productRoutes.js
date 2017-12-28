import { Router } from 'express';
import multer from 'multer';
import {
  productGetAll,
  productCreate,
  productGetById,
  productUpdateById,
  productDeleteById,
} from './productControllers';

const router = Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './uploads/');
  },
  filename(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpg'
    || file.mimetype === 'image/jpeg'
    || file.mimetype === 'image/gif'
    || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 5, // 5 Mb
  },
  fileFilter,
});

router.get('/', productGetAll);
router.post('/', upload.single('image'), productCreate);
router.get('/:productId', productGetById);
router.patch('/:productId', productUpdateById);
router.delete('/:productId', productDeleteById);

export default router;
