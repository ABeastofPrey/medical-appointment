import { Gender } from './user.constants';

export interface User {
    id: number;
    phone: number;
    name: string;
    gender: Gender;
    age: number;
    vcode: number;
}
