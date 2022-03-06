import { Component, OnInit } from "@angular/core";
import { AutorService } from "src/app/services/autor/autor.service";
import { ArticleModel } from "src/app/models/article/ArticleModel";

@Component({
  selector: "app-list-articles",
  templateUrl: "./list-articles.component.html",
  styleUrls: ["./list-articles.component.css"]
})
export class ListArticlesComponent implements OnInit {
  constructor(private autorService: AutorService) {
    this.getInfo();
  }

  ngOnInit() {}

  articles: ArticleModel[] = [];
  file: any;

  cp: number = 1;
  total: number = 0;

  filesFormat: any = [];

  //Obtener informacion de los archivos
  getInfo() {
    this.autorService.GetFileData().subscribe(items => {
      this.articles = items;
    });
    this.autorService.GetFiles().subscribe(items2 => {
      this.filesFormat = items2;
    });
  }

  //Descargar archivo
  downloadFile() {
    for (let i = 0; i < this.articles.length; i++) {
      if (this.filesFormat[i].name == this.articles[i].file) {
        this.autorService.GetFile(this.filesFormat[i]);
      }
    }
  }

  //Paginación
  onPageChange(event): void {
    this.cp = event;
  }
}
