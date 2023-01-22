import { userDtos } from '~/domain/user/dtos';
import { ISignUserUseCase } from '~/domain/user/use-cases';
import { User } from '~/domain/user/user';
import { IUserRepository } from '../repositories/user';

export class SignUserUseCase implements ISignUserUseCase {
  private userRepository: IUserRepository;
  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async execute(data: userDtos): Promise<ISignUserUseCase.OutPut> {
    try {
      const user = User.build(data);
      if (user instanceof Error) {
        throw new Error(user.message);
      }
      const res = this.userRepository.create(user);
      return res;
    } catch (error) {
      throw new Error(error.toString());
    }
  }
}
