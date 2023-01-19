import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Guid } from "guid-typescript";

@Component({
  selector: 'app-user-data',
  templateUrl: './user.component.html'
})
export class UserDataComponent {
  public users: ReadUserDto[] = [];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<ReadUserDto[]>(baseUrl + 'user').subscribe(result => {
      this.users = result;
    }, error => console.error(error));
  }
}

interface ReadUserDto {
  id: Guid;
  name: string;
}
