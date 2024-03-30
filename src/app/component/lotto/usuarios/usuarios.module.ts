import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsuariosRoutingModule } from "./usuarios-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { TopSectionModule } from "../../ecommerce/product-list/top-section/top-section.module";
import { UsuariosComponent } from "./usuarios.component";
import { ModalNuevoUserComponent } from "./modal-nuevo-user/modal-nuevo-user.component";
import { ModalEditarUserComponent } from "./modal-editar-user/modal-editar-user.component";

@NgModule({
  declarations: [
    UsuariosComponent,
    ModalNuevoUserComponent,
    ModalEditarUserComponent,
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    TopSectionModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
  ],
  exports: [ModalNuevoUserComponent, ModalEditarUserComponent],
})
export class UsuariosModule {}
