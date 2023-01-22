export type userDtos = {
  email: string;
  password: string;
};

export type userStoreDtos = {
  id: string;
  updatedAt: string | Date;
  createdAt: string | Date;
} & userDtos;
export type userEntityDtos = {
  id: string;
  createdAt: string | Date;
} & userDtos;
