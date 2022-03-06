import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AutorRoutingModule } from "./autor-routing.module";
import { HomeAutorComponent } from "./home-autor/home-autor.component";
import { ReviewArticlesComponent } from "./review-articles/review-articles.component";
import { ListArticlesComponent } from "./list-articles/list-articles.component";
import { SendArticlesComponent } from "./send-articles/send-articles.component";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EditArticlesComponent } from './edit-articles/edit-articles.component';

@NgModule({
  declarations: [
    HomeAutorComponent, 
    ReviewArticlesComponent,
    ListArticlesComponent,
    SendArticlesComponent,
    EditArticlesComponent
  ],
  imports: [
    CommonModule,
    AutorRoutingModule, 
    ReactiveFormsModule,
    FormsModule]
})
export class AutorModule {}
