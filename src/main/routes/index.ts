import { signUserFactory } from '../factores/user';

const signAction = signUserFactory();

export const routes = {
  route: '/sign',
  action: signUserFactory,
};
