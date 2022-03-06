import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListArticlesComponent } from "./list-articles/list-articles.component";
import { HomeAutorComponent } from "./home-autor/home-autor.component";
import { SendArticlesComponent } from "./send-articles/send-articles.component";
import { ReviewArticlesComponent } from "./review-articles/review-articles.component";
import { UrlInjectionAutorGuard } from "src/app/guards/url-injection-autor.guard";
import { EditArticlesComponent } from "./edit-articles/edit-articles.component";

const routes: Routes = [
  {
    path: "Autor/List",
    component: ListArticlesComponent,
    canActivate: [UrlInjectionAutorGuard]
  },
  {
    path: "Autor/Home",
    component: HomeAutorComponent,
    canActivate: [UrlInjectionAutorGuard]
  },
  {
    path: "Autor/Send",
    component: SendArticlesComponent,
    canActivate: [UrlInjectionAutorGuard]
  },
  {
    path: "Autor/Review",
    component: ReviewArticlesComponent,
    canActivate: [UrlInjectionAutorGuard]
  },
  {
    path: "Autor/Edit/:id",
    component: EditArticlesComponent,
    canActivate: [UrlInjectionAutorGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutorRoutingModule {}
