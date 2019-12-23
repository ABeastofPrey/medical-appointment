import { getData, postData } from '../../../services/api.service';

export const createUser = () => {
    const user = {
        name: 'Dandy',
        phone: 13585845436,
        vcode: 1234
    };
    return postData('users', user);
};
