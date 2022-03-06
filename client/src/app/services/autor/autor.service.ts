import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ArticleModel } from "src/app/models/article/ArticleModel";
import { Observable } from "rxjs";
import { UserService } from "../users/user.service";
import { UserModel } from "src/app/models/user/UserModel";

const url = "http://localhost:3000/api/";

@Injectable({
  providedIn: "root"
})
export class AutorService {
  constructor(private http: HttpClient, private user: UserService) {
    this.token = this.user.getToken();
  }

  //Subir Archivo
  UploadFile(file) {
    let data = new FormData();
    data.append("Articles[]", file, file.name);
    return this.http.post(
      `${url}containers/Articles/upload?access_token=${this.token}`,
      data
    );
  }

  DeleteFile(file) {
    return this.http.delete(`${url}containers/Articles/files/${file}`);
  }

  token = "";

  //Crear Carpeta
  CreateFolder(name) {
    return this.http.post(
      `${url}containers/`,
      { name },
      {
        headers: new HttpHeaders({
          "content-type": "application/json"
        })
      }
    );
  }

  //Obtener Archivo(Descargar)
  DownloadFile(file) {
    return this.http.get(`${url}containers/Articles/download/${file}`);
  }

  //Obtener Archivos
  GetFile(file) {
    return this.http.get(`${url}containers/Articles/files/${file}`);
  }

  GetFiles() {
    return this.http.get(`${url}containers/Articles/files`);
  }

  //Subir info de Articulo
  UploadArticle(file): Observable<ArticleModel> {
    return this.http.post<ArticleModel>(
      `${url}Articles?access_token=${this.token}`,
      file,
      {
        headers: new HttpHeaders({
          "content-type": "application/json"
        })
      }
    );
  }

  //Obtener info de Articulos
  GetFileData(): Observable<ArticleModel[]> {
    return this.http.get<ArticleModel[]>(`${url}Articles`, {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    });
  }

  //Obtener info de un Articulo
  GetData(id: string): Observable<ArticleModel> {
    return this.http.get<ArticleModel>(`${url}Articles/${id}`, {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    });
  }

  updateArticle(article: ArticleModel): Observable<ArticleModel> {
    return this.http.put<ArticleModel>(`${url}Articles/${article.id}`, article, {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    });
  }

  //Editar info de Articulo
  EditArticle(article: ArticleModel): Observable<ArticleModel> {
    return this.http.put<ArticleModel>(
      `${url}Articles/${article.id}`,
      article,
      {
        headers: new HttpHeaders({
          "content-type": "application/json"
        })
      }
    );
  }
}
