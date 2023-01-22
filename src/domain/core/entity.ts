import { randomUUID } from 'crypto';

export class Entity {
  private _id: string;
  private created_at: Date | string;
  constructor() {
    this._id = randomUUID();
    this.created_at = new Date();
  }

  get id() {
    return this._id;
  }

  get createdAt() {
    return this.created_at;
  }
}
