import { Component, OnInit } from "@angular/core";
import { AutorService } from "src/app/services/autor/autor.service";
import { ArticleModel } from "src/app/models/article/ArticleModel";

@Component({
  selector: "app-evaluate-articles",
  templateUrl: "./evaluate-articles.component.html",
  styleUrls: ["./evaluate-articles.component.css"]
})
export class EvaluateArticlesComponent implements OnInit {
  constructor(private autorService: AutorService) {
    this.getInfo();
  }

  ngOnInit() {}

  articles: ArticleModel[] = [];
  file: any;

  filesFormat: any = [];

  getInfo() {
    this.autorService.GetFileData().subscribe(items => {
      this.articles = items;
    });
    this.autorService.GetFiles().subscribe(items2 => {
      this.filesFormat = items2;
    });
  }

  //Cambia el estado del Articulo
  state(article, flag) {
    this.autorService.GetData(article.id).subscribe(item => {
      if (flag == 1) {
        item["state"] = "Accepted";
        alert("The Article has been Accepted");
      } else if (flag == 2) {
        item["state"] = "Accepted with changes";
        alert("The Article has been Accepted with changes");
      } else if (flag == 3) {
        item["state"] = "Rejected";
        alert("The Article has been Rejected");
      }
      this.autorService.updateArticle(item).subscribe();
    });
  }
}
