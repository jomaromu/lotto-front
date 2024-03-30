import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { productDB } from "src/app/interfaces/product-interfaces";
import { ProductsService } from "src/app/services/products.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-productos",
  templateUrl: "./productos.component.html",
  styleUrl: "./productos.component.scss",
})
export class ProductosComponent {
  products: Array<productDB> = [];
  product: productDB;
  obsEliminar: Subscription;
  obsGet: Subscription;

  constructor(private productServices: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  // viene del emit de los modals
  modalUpdateProducts(e: boolean): void {
    if (e) {
      this.getProducts();
    }
  }

  getProducts(): void {
    this.obsGet = this.productServices
      .obtenerProductos()
      .subscribe((product) => {
        if (product.ok) {
          this.products = product.productsDB;
          // console.log(this.products);
        } else {
          console.log("error");
        }
      });
  }

  eliminarProducto(_id: string): void {
    Swal.fire({
      title: "Mensaje",
      text: "¿Desea eliminar este producto?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, borrarlo",
    }).then((result) => {
      if (result.isConfirmed) {
        this.obsEliminar = this.productServices
          .eliminarProducto(_id)
          .subscribe((product) => {
            if (product.ok) {
              this.product = product.productDB;

              this.getProducts();
              Swal.fire({
                title: "Mensaje",
                text: "producto borrado!!",
                icon: "success",
              });
            } else {
              console.log("error");
            }
          });
      }
    });
  }

  ngOnDestroy(): void {}
}
