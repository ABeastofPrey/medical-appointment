import Router from 'koa-router';
import { getUsers, getUserById, createUser, updateUser, deleteUser } from './user.controller';

export const userRouter = new Router();

userRouter.get('/', getUsers);

userRouter.get('/:id', getUserById);

userRouter.post('/', createUser);

userRouter.put('/:id', updateUser);

userRouter.delete('/:id', deleteUser);
