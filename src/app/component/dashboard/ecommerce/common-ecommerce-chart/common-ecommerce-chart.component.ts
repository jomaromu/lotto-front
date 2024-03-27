import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-common-ecommerce-chart',
  templateUrl: './common-ecommerce-chart.component.html',
  styleUrl: './common-ecommerce-chart.component.scss'
})
export class CommonEcommerceChartComponent {

  @Input() data: any;

}
