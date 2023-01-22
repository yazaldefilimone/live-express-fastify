import { SignUserUseCase } from '~/application/use-cases';
import { ISignUserUseCase } from '~/domain/user/use-cases';
import { InMemoryUserRepository } from '~/infractuture/repositories/In-memory-user-repository';

export const signUserFactory = (): ISignUserUseCase => {
  const userRepository = new InMemoryUserRepository();
  const signUserUseCase = new SignUserUseCase(userRepository);
  return signUserUseCase;
};
