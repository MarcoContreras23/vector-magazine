import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./landing/home/home.component";
import { UsersModule } from "./modules/users/users.module";
import { UserManualComponent } from './landing/user-manual/user-manual.component';

const routes: Routes = [
  {
    path: "Home",
    component: HomeComponent
  },
  {
    path:"Manual",
    component: UserManualComponent
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/Home"
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes), UsersModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
