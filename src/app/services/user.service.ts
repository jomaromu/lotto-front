import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { environment } from "src/environments/environment";
import { User, userDB } from "../interfaces/user-interface";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}

  nuevoUsuario(data: userDB): Observable<User> {
    const url = `${environment.urlUser}/user/new-user`;

    return this.http.post<User>(url, data).pipe(map((userDB) => userDB));
  }

  obtenerUsuarios(): Observable<User> {
    const url = `${environment.urlUser}/user/get-users`;

    return this.http.get<User>(url).pipe(map((userDB) => userDB));
  }

  obtenerUsuario(_id: string): Observable<User> {
    const url = `${environment.urlUser}/user/get-user`;
    const header = new HttpHeaders({ _id });

    return this.http
      .get<User>(url, { headers: header })
      .pipe(map((roleDB) => roleDB));
  }

  editarUsuario(data: userDB): Observable<User> {
    const url = `${environment.urlUser}/user/edit-user`;

    return this.http.put<User>(url, data).pipe(map((userDB) => userDB));
  }

  eliminarUser(_id: string): Observable<User> {
    const url = `${environment.urlUser}/user/delete-user`;

    const header = new HttpHeaders({
      _id,
    });

    return this.http
      .delete<User>(url, { headers: header })
      .pipe(map((userDB) => userDB));
  }
}
