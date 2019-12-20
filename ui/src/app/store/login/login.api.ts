import { getData, postData } from '../../services/api.service';

export const getVcode = _phone => getData(`vcode?phone=${_phone}`);

export const login = ({ phone, vcode }) => postData('login', { phone, vcode });
