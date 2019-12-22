import { getUsers, getUserById, createUser, updateUser, deleteUser } from './user.controller';

export const registUserRoutes = router => {

    router.prefix('/users')

    router.get('/', getUsers);

    router.get('/:id', getUserById);

    router.post('/', createUser);

    router.put('/:id', updateUser);

    router.delete('/:id', deleteUser);
};
