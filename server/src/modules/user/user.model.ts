export interface IUser {
    id: string;
    name: string;
}

export class User implements IUser {
    id: string;
    name: string;
    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }
}
