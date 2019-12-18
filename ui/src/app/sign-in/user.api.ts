import { getData } from '../services/api.service';

export const getVcode = _phone => getData(`vcode?phone=${_phone}`);
