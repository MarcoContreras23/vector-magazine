import { Injectable } from "@angular/core";
import { UserService } from "../users/user.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UserModel } from "src/app/models/user/UserModel";
import { Observable } from "rxjs";
import { ArticleModel } from "src/app/models/article/ArticleModel";

const url = "http://localhost:3000/api/";

@Injectable({
  providedIn: "root"
})
export class EditorService {
  constructor(private http: HttpClient, private user: UserService) {
    this.token = this.user.getToken();
  }

  token = "";

  //Funcion para obtener todos usuarios del sistema
  getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${url}Users`, {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    });
  }

  //Actualizar informacion de usuario
  updateUser(user: UserModel): Observable<UserModel> {
    return this.http.put<UserModel>(`${url}Users/${user.id}`, user, {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    });
  }

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
}
