import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeEvaluadorComponent } from "./home-evaluador/home-evaluador.component";
import { UrlInjectionEvaluatorGuard } from "src/app/guards/url-injection-evaluator.guard";
import { EvaluateArticlesComponent } from "./evaluate-articles/evaluate-articles.component";


const routes: Routes = [
  {
    path: "Evaluator/Home",
    component: HomeEvaluadorComponent,
    canActivate: [UrlInjectionEvaluatorGuard]
  },
  {
    path: "Evaluator/Evaluate",
    component: EvaluateArticlesComponent,
    canActivate: [UrlInjectionEvaluatorGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvaluatorRoutingModule {}
