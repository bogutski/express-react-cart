import { Router } from 'express';
import { uploadFile, deleteFile } from './fileControllers';
import upload from './fileUpload';

const router = Router();

router.post('/', upload.array('file', 20), uploadFile);
router.delete('/', deleteFile);

export default router;
