import { Component, OnInit, DoCheck } from '@angular/core';
import { UserService } from 'src/app/services/users/user.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-home-autor',
  templateUrl: './home-autor.component.html',
  styleUrls: ['./home-autor.component.css']
})
export class HomeAutorComponent implements OnInit, DoCheck {

  constructor(private user: UserService) { }

  ngOnInit() {
    this.Logged();
  }

  ngDoCheck() {
    this.Logged();
  }

  username = '';

  Logged() {
    let user = this.user.getUserInfo();
    if (!isNullOrUndefined(user)) {
      this.username = `${user['name']} ${user['lastname']}`;
    }
  }
}
