import { getVcode, login } from './register.controller';

export const registRegisterRoutes = router => {
    router.get('/vcode', getVcode);

    router.post('/login', login);
};
