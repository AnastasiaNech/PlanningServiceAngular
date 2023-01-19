import { Component, Input } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})

export class UserDataComponent {
  @Input() user: User

}
