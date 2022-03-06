import { Component, OnInit } from '@angular/core';
import { ArticleModel } from 'src/app/models/article/ArticleModel';
import { AutorService } from 'src/app/services/autor/autor.service';

@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css']
})
export class ListArticlesComponent implements OnInit {
  constructor(private autorService: AutorService) {}

  ngOnInit() {
    this.getInfo();
  }

  scrollToElement = elementId => {
    document
      .querySelector("#" + elementId)
      .scrollIntoView({ behavior: "smooth", block: "center" });
  };

  uploadedFiles: Array<File>;

  articles: ArticleModel[] = [];

  getInfo() {
    this.autorService.GetFileData().subscribe(items => {
      this.articles = items;
    });
  }

  download(article) {
    this.autorService.GetFile(article.file).subscribe(file => {
      console.log(file);
    });
  }
}
