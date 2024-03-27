import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RolesRoutingModule } from "./roles-routing.module";
import { RolesComponent } from "./roles.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// components
import { TopSectionModule } from "../../ecommerce/product-list/top-section/top-section.module";
import { ModalNuevoRoleComponent } from "./modal-nuevo-role/modal-nuevo-role.component";
import { ModalEditarRoleComponent } from "./modal-editar-role/modal-editar-role.component";

@NgModule({
  declarations: [RolesComponent, ModalNuevoRoleComponent, ModalEditarRoleComponent],
  imports: [
    CommonModule,
    RolesRoutingModule,
    TopSectionModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [ModalNuevoRoleComponent, ModalEditarRoleComponent],
})
export class RolesModule {}
