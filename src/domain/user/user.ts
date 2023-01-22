import { Entity } from '~/domain/core';
import { userDtos, userEntityDtos } from './dtos';

export class User extends Entity {
  private props: userDtos;
  private constructor(props: userDtos) {
    super();
    this.props = props;
  }

  public static isValidEmail(email: string): Error | string {
    return email.split('@')[0].length < 2 ? Error('Invalid Email') : email;
  }

  public static isValidPassword(password: string): Error | string {
    return password.length < 4 ? Error('Invalid password') : password;
  }

  public static build(props: userDtos): userEntityDtos | Error {
    const isUser = {
      email: User.isValidEmail(props.email),
      password: User.isValidPassword(props.password),
    };

    if (isUser.email instanceof Error) {
      return new Error(isUser.email.message);
    }

    if (isUser.password instanceof Error) {
      return new Error(isUser.password.message);
    }

    const user = new User(isUser as userDtos);

    return {
      id: user.id,
      ...user.props,
      createdAt: user.createdAt,
    };
  }
}
