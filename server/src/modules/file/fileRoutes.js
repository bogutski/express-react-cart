import { Router } from 'express';
import { uploadFile, deleteFile } from './fileControllers';

const router = Router();

router.post('/', uploadFile);
router.delete('/', deleteFile);

export default router;
