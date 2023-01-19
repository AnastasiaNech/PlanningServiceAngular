import { Guid } from "guid-typescript";

export interface IUser {
  userId: Guid;
  userName: string;
  password: string;
  email: string;
  birthDate: Date;
}
