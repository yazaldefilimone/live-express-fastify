import { userDtos } from '../dtos';

export interface ISignUserUseCase {
  execute: (data: ISignUserUseCase.Input) => Promise<ISignUserUseCase.OutPut>;
}

export namespace ISignUserUseCase {
  export type Input = userDtos;
  export type OutPut = { id: string };
}
