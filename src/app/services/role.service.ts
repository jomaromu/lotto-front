import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Role, RoleDB } from "../interfaces/role-interface";
import { Observable, map } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class RoleService {
  constructor(private http: HttpClient) {}

  nuevoRole(data: RoleDB): Observable<Role> {
    const url = `${environment.urlRole}/role/new-role`;

    return this.http.post<Role>(url, data).pipe(map((roleDB) => roleDB));
  }

  editarRole(data: RoleDB): Observable<Role> {
    const url = `${environment.urlRole}/role/edit-role`;

    return this.http.put<Role>(url, data).pipe(map((roleDB) => roleDB));
  }

  obtenerRoles(): Observable<Role> {
    const url = `${environment.urlRole}/role/get-rols`;

    return this.http.get<Role>(url).pipe(map((roleDB) => roleDB));
  }

  obtenerRole(_id: string): Observable<Role> {
    const url = `${environment.urlRole}/role/get-role`;
    const header = new HttpHeaders({ _id });

    return this.http
      .get<Role>(url, { headers: header })
      .pipe(map((roleDB) => roleDB));
  }

  eliminarRole(_id: string): Observable<Role> {
    const url = `${environment.urlRole}/role/delete-role`;

    const header = new HttpHeaders({
      _id,
    });

    return this.http
      .delete<Role>(url, { headers: header })
      .pipe(map((roleDB) => roleDB));
  }
}
