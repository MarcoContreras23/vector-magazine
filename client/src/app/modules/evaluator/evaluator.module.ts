import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EvaluatorRoutingModule } from "./evaluator-routing.module";
import { HomeEvaluadorComponent } from "./home-evaluador/home-evaluador.component";
import { EvaluateArticlesComponent } from './evaluate-articles/evaluate-articles.component';


@NgModule({
  declarations: [HomeEvaluadorComponent, EvaluateArticlesComponent],
  imports: [CommonModule, EvaluatorRoutingModule]
})
export class EvaluatorModule {}
