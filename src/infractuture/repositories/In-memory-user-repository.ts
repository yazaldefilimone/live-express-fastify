import { IUserRepository } from '~/application/repositories/user';
import { userEntityDtos, userStoreDtos } from '~/domain/user/dtos';

const database: userStoreDtos[] = [];

export class InMemoryUserRepository implements IUserRepository {
  async create(data: userEntityDtos): Promise<{ id: string }> {
    database.push({
      ...data,
      updatedAt: new Date(),
    });

    return {
      id: database.at(-1).id,
    };
  }
}
