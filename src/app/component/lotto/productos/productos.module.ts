import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductosRoutingModule } from "./productos-routing.module";
import { TopSectionModule } from "../../ecommerce/product-list/top-section/top-section.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


import { ProductosComponent } from "./productos.component";
import { ModalEditarProductoComponent } from "./modal-editar-producto/modal-editar-producto.component";
import { ModalNuevoProductoComponent } from "./modal-nuevo-producto/modal-nuevo-producto.component";

@NgModule({
  declarations: [
    ProductosComponent,
    ModalEditarProductoComponent,
    ModalNuevoProductoComponent,
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    TopSectionModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [ModalEditarProductoComponent, ModalNuevoProductoComponent],
})
export class ProductosModule {}
