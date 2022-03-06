import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorRoutingModule } from './editor-routing.module';
import { HomeEditorComponent } from './home-editor/home-editor.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { ListArticlesComponent } from './list-articles/list-articles.component';


@NgModule({
  declarations: [
    HomeEditorComponent, 
    AdminUsersComponent,
    ListArticlesComponent
  ],
  imports: [
    CommonModule,
    EditorRoutingModule,
  ],
  exports:[
    HomeEditorComponent
  ]
})
export class EditorModule { }
