import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UsersRoutingModule } from "./users-routing.module";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxCaptchaModule } from "ngx-captcha";
import { SignupEditorComponent } from "./signup-editor/signup-editor.component";
import { SignupHomeComponent } from "./signup-home/signup-home.component";

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    SignupEditorComponent,
    SignupHomeComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCaptchaModule
  ],
  exports: [LoginComponent, SignupComponent]
})
export class UsersModule { }
