import { Component } from '@angular/core';
import { topEcommerceData } from '../../../../shared/data/dashboard/ecommerce/dashboard-ecommerce';


@Component({
  selector: 'app-top-project-card',
  templateUrl: './top-project-card.component.html',
  styleUrl: './top-project-card.component.scss'
})
export class TopProjectCardComponent {

  public TopecommercaData = topEcommerceData;

}
