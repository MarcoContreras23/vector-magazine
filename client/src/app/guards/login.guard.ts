import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanActivate,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "../services/users/user.service";
import { isNullOrUndefined } from "util";

@Injectable({
  providedIn: "root"
})
export class LoginGuard implements CanActivate {
  constructor(private user: UserService, private router: Router) {}

  canActivate() {
    let user = this.user.getUserInfo();
    if (!isNullOrUndefined(user)) {
      if (user["rol"] == 1) {
        this.router.navigate(["/Autor/Home"]);
        return false;
      } else if (user["rol"] == 3) {
        this.router.navigate(["/Editor/Home"]);
        return false;
      } else if (user["rol"] == 2) {
        this.router.navigate(["/Evaluator/Home"]);
        return false;
      }
    } else {
      return true;
    }
  }
}
