import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { UsuariosComponent } from "./usuarios.component";

const routes: Routes = [
  { path: "", component: UsuariosComponent },
  {
    path: "usuarios",
    component: UsuariosComponent,
    data: {
      title: "Usuarios",
      breadcrumb: "Usuarios",
    },
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class UsuariosRoutingModule {}
