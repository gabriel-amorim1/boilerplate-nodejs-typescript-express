import { Router } from 'express';
import * as MovieController from './controllers';

const router = Router();

router.post('/', MovieController.create);
router.get('/', MovieController.list);

export default router;
