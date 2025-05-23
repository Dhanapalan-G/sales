import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(data: Partial<User>): Promise<User> {
    const newUser = this.userRepository.create(data);
    return this.userRepository.save(newUser);
  }
  async findByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { email } });
  }

  // (Optional) You can add other functions like createUser, findAllUsers, etc.
}
