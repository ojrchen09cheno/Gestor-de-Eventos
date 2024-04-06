export interface LoginRepo{
  findByUser(username: string): Promise<any>;
}