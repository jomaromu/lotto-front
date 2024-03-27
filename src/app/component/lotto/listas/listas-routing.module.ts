import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ListasComponent } from "./listas.component";

const routes: Routes = [
  { path: "", component: ListasComponent },
  {
    path: "listas",
    component: ListasComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListasRoutingModule {}
