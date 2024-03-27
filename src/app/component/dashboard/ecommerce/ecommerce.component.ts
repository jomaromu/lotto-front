import { Component } from '@angular/core';
import * as chartData from '../../../shared/data/dashboard/default/default-chart';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.scss']
})
export class EcommerceComponent {

  public totalrevenuchart = chartData.revenueChart
  public totalorderchart = chartData.TotalOrderChart

}
