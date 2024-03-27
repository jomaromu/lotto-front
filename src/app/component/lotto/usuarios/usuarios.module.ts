import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsuariosRoutingModule } from "./usuarios-routing.module";

import { TopSectionModule } from "../../ecommerce/product-list/top-section/top-section.module";
import { UsuariosComponent } from "./usuarios.component";

@NgModule({
  declarations: [UsuariosComponent],
  imports: [CommonModule, UsuariosRoutingModule, TopSectionModule],
})
export class UsuariosModule {}
