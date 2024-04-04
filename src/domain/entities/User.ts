export class Users {
  id: number;
  username: string;
  name: string;

  static create(id: number, username: string, name: string){
    const user = new Users();
    user.id = id;
    user.username = username;
    user.name = name;
    return user;
  }
}