import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
  name: string;
  username: string;
  password: string;
};

@Injectable({})
export class UserService {
  private readonly user: User[] = [
    {
      id: 1,
      name: 'Muhtady Chy. Mahi',
      username: 'muhtadymahi',
      password: 'muhtadymahi',
    },
  ];

  async findUser(username: string): Promise<User | undefined> {
    return this.user.find((user) => user.username === username);
  }
}
