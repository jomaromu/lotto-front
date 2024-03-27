import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ProductosComponent } from "./productos.component";

const routes: Routes = [
  { path: "", component: ProductosComponent },
  {
    path: "productos",
    component: ProductosComponent,
    data: {
      title: "Productos",
      breadcrumb: "Productos",
    },
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ProductosRoutingModule {}
