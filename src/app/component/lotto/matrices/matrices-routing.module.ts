import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { MatricesComponent } from "./matrices.component";

const routes: Routes = [
  { path: "", component: MatricesComponent },
  {
    path: "matrices",
    component: MatricesComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class MatricesRoutingModule {}
