import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductosRoutingModule } from "./productos-routing.module";
import { ProductosComponent } from "./productos.component";
import { TopSectionModule } from "../../ecommerce/product-list/top-section/top-section.module";

@NgModule({
  declarations: [ProductosComponent],
  imports: [CommonModule, ProductosRoutingModule, TopSectionModule],
})
export class ProductosModule {}
