import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AutorModule } from "../autor/autor.module";
import { LoginComponent } from "./login/login.component";
import { LoginGuard } from "src/app/guards/login.guard";
import { SignupComponent } from "./signup/signup.component";
import { SignupEditorComponent } from "./signup-editor/signup-editor.component";
import { SignupHomeComponent } from "./signup-home/signup-home.component";
import { EditorModule } from '../editor/editor.module';
import { EvaluatorModule } from '../evaluator/evaluator.module';

const routes: Routes = [
  {
    path: "Login",
    component: LoginComponent,
    canActivate: [LoginGuard]
  },
  {
    path: "Login/:id",
    component: LoginComponent,
    canActivate: [LoginGuard]
  },
  {
    path: "Signup/Autor",
    component: SignupComponent,
    canActivate: [LoginGuard]
  },
  {
    path: "Signup/Editor",
    component: SignupEditorComponent,
    canActivate: [LoginGuard]
  },
  {
    path: "Signup/Home",
    component: SignupHomeComponent,
    canActivate: [LoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), AutorModule, EditorModule, EvaluatorModule],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
