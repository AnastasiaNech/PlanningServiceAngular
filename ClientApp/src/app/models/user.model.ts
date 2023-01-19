import { Guid } from "guid-typescript";

export class User {

  constructor(
    public id: Guid,
    public name: string,
    public email: string,
    public birthDate: Date,
  ) {}
}
