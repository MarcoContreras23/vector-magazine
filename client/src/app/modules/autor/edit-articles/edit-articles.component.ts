import { Component, OnInit } from "@angular/core";
import { ArticleModel } from "src/app/models/article/ArticleModel";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AutorService } from "src/app/services/autor/autor.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-edit-articles",
  templateUrl: "./edit-articles.component.html",
  styleUrls: ["./edit-articles.component.css"]
})
export class EditArticlesComponent implements OnInit {
  constructor(
    private autorService: AutorService,
    private route: Router,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    this.UploadForm = this.FormCreator();
    let id = this.router.snapshot.paramMap.get("id");
    this.autorService.GetData(id).subscribe(article => {
      this.UploadForm.patchValue({ title: article.title });
      this.UploadForm.patchValue({ abstract: article.abstract });
      this.UploadForm.patchValue({ keywords: article.keywords });
      this.UploadForm.patchValue({ id: article.id });
      this.autorService.GetFile(article.file).subscribe(file => {
        this.UploadForm.patchValue({ file: file });
      });
    });
  }

  UploadForm: FormGroup;

  FormCreator(): FormGroup;

  FormCreator(): FormGroup {
    return new FormGroup({
      title: new FormControl("", Validators.required),
      abstract: new FormControl("", Validators.required),
      keywords: new FormControl("", Validators.required),
      file: new FormControl([], Validators.required),
      id: new FormControl("")
    });
  }

  public get id() {
    return this.UploadForm.get("id");
  }

  public get title() {
    return this.UploadForm.get("title");
  }

  public get abstract() {
    return this.UploadForm.get("abstract");
  }

  public get keywords() {
    return this.UploadForm.get("keywords");
  }

  public get file() {
    return this.UploadForm.get("file");
  }

  SetFile(File) {
    this.UploadForm.patchValue({ file: File });
  }

  //Editar Informacion de Articulo
  EditArticle() {
    let ArticleFile: ArticleModel = {
      title: this.title.value,
      abstract: this.abstract.value,
      keywords: this.keywords.value,
      file: this.file.value.name,
      id: this.id.value,
      autor:null,
      state: null
    };
    this.autorService.EditArticle(ArticleFile).subscribe(item => {
      alert("This Article has been updated...");
      this.route.navigate(["Autor/List"]);
    });
    this.autorService.DeleteFile(ArticleFile.file).subscribe();
    this.autorService.UploadFile(ArticleFile.file).subscribe();
  }
}
