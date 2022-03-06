import { Component, OnInit, DoCheck } from "@angular/core";
import { UserService } from "src/app/services/users/user.service";
import { isNullOrUndefined } from "util";
import { Router } from "@angular/router";
import { ThrowStmt } from "@angular/compiler";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit, DoCheck {
  constructor(private user: UserService, private router: Router) {}

  ScrollingToElement = elementId => {
    document
      .querySelector("#" + elementId)
      .scrollIntoView({ behavior: "smooth", block: "start" });
  };

  ngOnInit() {
    this.Logged();
  }

  ngDoCheck() {
    this.Logged();
  }

  User = null;
  username = "";
  logged = false;
  active = false;
  info = false;

  Activate() {
    this.active = !this.active;
  }

  Logged() {
    let user = this.user.getUserInfo();
    if (!isNullOrUndefined(user)) {
      this.logged = true;
      this.username = `${user["name"]} ${user["lastname"]}`;
      this.User = user;
    }
  }

  Logout() {
    this.logged = !this.logged;
    this.info = !this.info;
    localStorage.removeItem("TokenID");
    localStorage.removeItem("UserInfo");
  }

  Info() {
    return (this.info = !this.info);
  }

  Redirect() {
    if (this.User["rol"] == 1) {
      this.router.navigate(["/Autor/Home"]);
    } else if (this.User["rol"] == 2) {
      this.router.navigate(["Evaluator/Home"]);
    } else if (this.User["rol"] == 3) {
      this.router.navigate(["/Editor/Home"]);
    }
  }
}
