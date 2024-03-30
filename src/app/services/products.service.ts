import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product, productDB } from "../interfaces/product-interfaces";
import { environment } from "src/environments/environment";
import { Observable, map, tap } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  nuevoProducto(data: productDB): Observable<Product> {
    const url = `${environment.urlProduct}/product/new-product`;

    return this.http
      .post<Product>(url, data)
      .pipe(map((productDB) => productDB));
  }

  editarProducto(data: productDB): Observable<Product> {
    const url = `${environment.urlProduct}/product/edit-product`;

    return this.http
      .put<Product>(url, data)
      .pipe(map((productDB) => productDB));
  }

  obtenerProductos(): Observable<Product> {
    const url = `${environment.urlProduct}/product/get-products`;

    return this.http.get<Product>(url).pipe(map((productDB) => productDB));
  }

  obtenerProducto(_id: string): Observable<Product> {
    const url = `${environment.urlProduct}/product/get-product`;
    const header = new HttpHeaders({ _id });

    return this.http.get<Product>(url, { headers: header }).pipe(
      map((productDB) => productDB)
      // tap((resp) => console.log(resp))
    );
  }

  eliminarProducto(_id: string): Observable<Product> {
    const url = `${environment.urlProduct}/product/delete-product`;

    const header = new HttpHeaders({
      _id,
    });

    return this.http
      .delete<Product>(url, { headers: header })
      .pipe(map((productDB) => productDB));
  }
}
