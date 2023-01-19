import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { UsersService } from '../services/user.services';


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  providers: [UsersService]
})
export class UserPageComponent implements OnInit {

  constructor(public httpService: UsersService) { }

  ngOnInit() {
    this.httpService.get().subscribe();
  }
}
