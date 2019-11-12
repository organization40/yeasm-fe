import { EntityBase } from './entity_base.model';

export class User extends EntityBase {

  constructor(loadedAttributes: object) {
    super();
    this.mapAttributes(loadedAttributes);
    this.id = 5;
  }

  public id: number = undefined;
  jointDate: Date = undefined;
  firstName: string = undefined;
  lastName: string = undefined;
  nickname: string = undefined;
  password: string = undefined;
  dateOfBirth: Date = undefined;
  email: string = undefined;
  createdBy: User = undefined;

}
