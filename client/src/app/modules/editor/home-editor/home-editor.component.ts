import { Component, OnInit } from "@angular/core";
import { UserService } from 'src/app/services/users/user.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: "app-home-editor",
  templateUrl: "./home-editor.component.html",
  styleUrls: ["./home-editor.component.css"]
})
export class HomeEditorComponent implements OnInit {
  constructor(private user: UserService) {}

  ngOnInit() {
    this.Logged();
  }

  ngDoCheck() {
    this.Logged();
  }

  username = "";

  Logged() {
    let user = this.user.getUserInfo();
    if (!isNullOrUndefined(user)) {
      this.username = `${user["name"]} ${user["lastname"]}`;
    }
  }
}
