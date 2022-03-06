import { Component, OnInit } from "@angular/core";
import { ArticleModel } from "src/app/models/article/ArticleModel";
import { AutorService } from "src/app/services/autor/autor.service";

@Component({
  selector: "app-review-articles",
  templateUrl: "./review-articles.component.html",
  styleUrls: ["./review-articles.component.css"]
})
export class ReviewArticlesComponent implements OnInit {
  constructor(private autorService: AutorService) {
    this.getInfo();
  }

  ngOnInit() {}

  articles: ArticleModel[] = [];
  file: any;

  filesFormat: any = [];

  //Obtener informacion de Archivo y de Articulo
  getInfo() {
    this.autorService.GetFileData().subscribe(items => {
      this.articles = items;
    });
    this.autorService.GetFiles().subscribe(items2 => {
      this.filesFormat = items2;
    });
  }
}
