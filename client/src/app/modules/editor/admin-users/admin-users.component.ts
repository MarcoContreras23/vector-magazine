import { Component, OnInit } from "@angular/core";
import { EditorService } from "src/app/services/editor/editor.service";
import { UserModel } from "src/app/models/user/UserModel";
import { ResourceLoader } from "@angular/compiler";
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: "app-admin-users",
  templateUrl: "./admin-users.component.html",
  styleUrls: ["./admin-users.component.css"]
})
export class AdminUsersComponent implements OnInit {
  constructor(private editorService: EditorService, private user: UserService) {}

  ngOnInit() {
    this.getUsers();
  }

  usersAutors: UserModel[] = [];
  usersEvaluators: UserModel[] = [];

  //Funcion para obtener los usuarios del sistema
  getUsers() {
    this.editorService.getUsers().subscribe(items1 => {
      for (let i = 0; i < items1.length; i++) {
        if (items1[i]["rol"] == 1) {
          this.usersAutors.push(items1[i]);
        } else if (items1[i]["rol"] == 2) {
          this.usersEvaluators.push(items1[i]);
        }
      }
    });
  }

  //Cambio de Rol
  changeRol(user) {
    if (user["rol"] == 1) {
      user["rol"] = 2;
    } else if (user["rol"] == 2) {
      user["rol"] = 1;
    }
    this.user.GetUser(user.id).subscribe(User => {
      console.log(User.password.length);
      this.editorService.updateUser(User).subscribe();
    });
    for(let i = 0; i < this.usersAutors.length; i++){
      this.usersAutors.splice(i, 1);
    }
    for(let i = 0; i < this.usersEvaluators.length; i++){
      this.usersEvaluators.splice(i, 1); 
    }
    this.getUsers();
  }
}
