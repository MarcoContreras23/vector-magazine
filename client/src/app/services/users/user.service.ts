import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { UserModel } from "src/app/models/user/UserModel";
import { isNullOrUndefined } from "util";

const url = "http://localhost:3000/api/";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}

  Register(
    name,
    secondname,
    lastname,
    secondlastname,
    country,
    phone,
    afiliation,
    formation,
    email,
    password,
    rol,
    confirmed
  ): Observable<UserModel> {
    return this.http.post<UserModel>(
      `${url}Users`,
      {
        name,
        secondname,
        lastname,
        secondlastname,
        country,
        phone,
        afiliation,
        formation,
        email,
        password,
        rol,
        confirmed
      },
      {
        headers: new HttpHeaders({
          "content-type": "application/json"
        })
      }
    );
  }

  //Funcion para realizar el Login
  Login(email, password) {
    return this.http.post(
      `${url}Users/login?include=user`,
      { email, password },
      {
        headers: new HttpHeaders({
          "content-type": "application/json"
        })
      }
    );
  }

  //Funcion para obtener el listado de usuarios existentes en el sistema
  GetUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${url}Users`, {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    });
  }

  //Funcion para obtener un usuario especifico
  GetUser(id): Observable<UserModel> {
    return this.http.get<UserModel>(`${url}Users/${id}`, {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    });
  }

  //Funcion para el envio de correo
  SendEmail(message, subject, emailAdresses) {
    return this.http.post(
      `${url}Articles/sendEmail`,
      { message, subject, emailAdresses },
      {
        headers: new HttpHeaders({
          "content-type": "application/json"
        })
      }
    );
  }

  UpdateUser(
    user: UserModel,
    name,
    secondname,
    lastname,
    secondlastname,
    country,
    phone,
    afiliation,
    formation,
    email,
    rol,
    confirmed,
    password
  ): Observable<UserModel> {
    console.log(user.password);
    return this.http.put<UserModel>(
      `${url}Users/${user.id}`,
      {
        name,
        secondname,
        lastname,
        secondlastname,
        country,
        phone,
        afiliation,
        formation,
        email,
        rol,
        confirmed,
        password
      },
      {
        headers: new HttpHeaders({
          "content-type": "application/json"
        })
      }
    );
  }

  //Guardar un nuevo usuario
  SaveUser(user, token) {
    localStorage.setItem("UserInfo", JSON.stringify(user));
    localStorage.setItem("TokenID", token);
  }

  getToken() {
    return localStorage.getItem("TokenID");
  }

  getUserInfo() {
    let user = localStorage.getItem("UserInfo");
    if (!isNullOrUndefined(user)) {
      return JSON.parse(user);
    }
  }
}
