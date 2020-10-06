interface UserInterface {
    id: string;
    login: string;
    password: string;
    name: string;
}

export class User implements UserInterface {
    public id: string;
    public login: string;
    public password: string;
    public name: string;

    constructor({
        id,
        login,
        password,
        name
    }: {
        id?: string;
        login?: string;
        password?: string;
        name?: string;
    }) {
        this.id = id;
        this.login = login;
        this.password = password;
        this.name = name;
    }
}
