import { Router } from 'express';
import { backupDump, backupRestore } from './backupControllers';

const router = Router();

router.get('/dump', backupDump);
router.get('/restore', backupRestore);

export default router;
