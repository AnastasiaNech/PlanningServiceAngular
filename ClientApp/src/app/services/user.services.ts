import { Inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user.model";
import { Observable, tap } from "rxjs";


@Injectable({
  providedIn: 'root'
})


export class UsersService {
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  users: User[] = []

  get(): Observable<User[]>
  {
    return this.http.get<User[]>(this.baseUrl + 'user').pipe(
      tap(users => this.users = users))
  } 
}

