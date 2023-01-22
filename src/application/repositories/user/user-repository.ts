import { userEntityDtos } from '~/domain/user/dtos';

export interface IUserRepository {
  create: (data: userEntityDtos) => Promise<{ id: string }>;
}
