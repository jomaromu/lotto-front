import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { TopSectionComponent } from "./top-section.component";
import { ProductDataTableComponent } from "../product-data-table/product-data-table.component";

@NgModule({
  declarations: [TopSectionComponent, ProductDataTableComponent],
  imports: [CommonModule, RouterModule, SharedModule, FormsModule, NgbModule],
  exports: [TopSectionComponent, ProductDataTableComponent],
})
export class TopSectionModule {}
