import { Router } from 'express';
import * as controller  from '../controllers/users.controller';
const router = Router();

/*---  /api/users   ----*/

router.post('/createOne/', controller.create);

router.get('/getFull/', controller.getAll);

router.get('/getOne/:id', controller.getOne);

router.delete('/delete/:id', controller.deleteUser);

router.put('/updateId/:id', controller.updatedUser);

router.post('/signin/', controller.signIn);

export default router;