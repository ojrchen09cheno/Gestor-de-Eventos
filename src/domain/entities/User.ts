export class User {
  id?: number;
  username?: string;
  name?: string;
  password?: string;
  token?: string;

  static create(id: number, username: string, password: string, name: string) {
    const user = new User();
    if (id) user.id = id;
    if (username) user.username = username;
    if (name) user.name = name;
    if (password) user.password = password;
    return user;
  }
}
