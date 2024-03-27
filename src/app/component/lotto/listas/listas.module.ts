import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ListasRoutingModule } from "./listas-routing.module";
import { ListasComponent } from "./listas.component";
import { TopSectionModule } from "../../ecommerce/product-list/top-section/top-section.module";

@NgModule({
  declarations: [ListasComponent],
  imports: [CommonModule, ListasRoutingModule, TopSectionModule],
})
export class ListasModule {}
