export class User {
  id!: number;
  username!: string;
  name!: string;

  static create(id: number, username: string, name: string){
    const user = new User();
    user.id = id;
    user.username = username;
    user.name = name;
    return user;
  }
}