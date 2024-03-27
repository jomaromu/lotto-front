import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { RolesComponent } from "./roles.component";

const routes: Routes = [
  { path: "", component: RolesComponent },
  { path: "Roles", component: RolesComponent, data: {
    title: "Roles",
    breadcrumb: "Roles",
  }, },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class RolesRoutingModule {}
