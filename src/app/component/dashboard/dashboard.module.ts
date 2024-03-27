import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from '../../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSliderModule } from 'ngx-slider-v2';

import { DefaultComponent } from './default/default.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { SalesChartComponent } from './ecommerce/sales-chart/sales-chart.component';
import { TopRevenueProductComponent } from './ecommerce/top-revenue-product/top-revenue-product.component';
import { SaleHistoryComponent } from './ecommerce/sale-history/sale-history.component';
import { LatestOrdersComponent } from './ecommerce/latest-orders/latest-orders.component';
import { CommonEcommerceChartComponent } from './ecommerce/common-ecommerce-chart/common-ecommerce-chart.component'
import { CommonProductCostingComponent } from './ecommerce/common-product-costing/common-product-costing.component';
import { SpecialOfferComponent } from './ecommerce/special-offer/special-offer.component';
import { LiveProductComponent } from './ecommerce/live-product/live-product.component';
import { EcommerceDetailsComponent } from './ecommerce/ecommerce-details/ecommerce-details.component';
import { ProjectStatisticsComponent } from './project-dashboard/project-statistics/project-statistics.component';
import { TodayWorkComponent } from './project-dashboard/today-work/today-work.component';
import { ActivityLogComponent } from './project-dashboard/activity-log/activity-log.component';
import { ImportantProjectListComponent } from './project-dashboard/important-project-list/important-project-list.component';
import { AllProjectTableComponent } from './project-dashboard/all-project-table/all-project-table.component';
import { TopClientListComponent } from './project-dashboard/top-client-list/top-client-list.component';
import { CommonWidgetChartComponent } from './project-dashboard/all-project-table/common-widget-chart/common-widget-chart.component';
import { MessageComponent } from './project-dashboard/message/message.component';
import { AddProjectCardComponent } from './project-dashboard/add-project-card/add-project-card.component';
import { ProjectIdeasCardComponent } from './project-dashboard/project-ideas-card/project-ideas-card.component';
import { CalendarComponent } from './project-dashboard/calendar/calendar.component';
import { RevenueGrowthComponent } from './default/revenue-growth/revenue-growth.component';
import { DeliveriesComponent } from './default/deliveries/deliveries.component';
import { TopProductComponent } from './default/top-product/top-product.component';
import { NewUserComponent } from './default/new-user/new-user.component';
import { TeamActivityComponent } from './default/team-activity/team-activity.component';
import { UserVisitsDayComponent } from './default/user-visits-day/user-visits-day.component';
import { LatestTransactionComponent } from './default/latest-transaction/latest-transaction.component';
import { SaleCardComponent } from './default/sale-card/sale-card.component';
import { ChartRaderComponent } from './default/chart-rader/chart-rader.component';
import { ProjectDashboardComponent } from './project-dashboard/project-dashboard.component';
import { TopProjectCardComponent } from './project-dashboard/top-project-card/top-project-card.component'

@NgModule({
  declarations: [
    DefaultComponent,
    EcommerceComponent,
    SalesChartComponent,
    TopRevenueProductComponent,
    SaleHistoryComponent,
    LatestOrdersComponent,
    CommonProductCostingComponent,
    SpecialOfferComponent,
    LiveProductComponent,
    EcommerceDetailsComponent,
    ProjectStatisticsComponent,
    TodayWorkComponent,
    ActivityLogComponent,
    ImportantProjectListComponent,
    AllProjectTableComponent,
    TopClientListComponent,
    CommonWidgetChartComponent,
    MessageComponent,
    AddProjectCardComponent,
    ProjectIdeasCardComponent,
    CalendarComponent,
    RevenueGrowthComponent,
    DeliveriesComponent,
    TopProductComponent,
    NewUserComponent,
    TeamActivityComponent,
    UserVisitsDayComponent,
    LatestTransactionComponent,
    SaleCardComponent,
    ChartRaderComponent,
    ProjectDashboardComponent,
    TopProjectCardComponent,
    CommonEcommerceChartComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgApexchartsModule,
    SharedModule,
    NgxSliderModule,
    NgbDatepickerModule
  ],
  exports: [
    CommonProductCostingComponent,
    TopProjectCardComponent,
    UserVisitsDayComponent,
    DeliveriesComponent,
    CalendarComponent,
    SpecialOfferComponent,
    CalendarComponent,
    EcommerceDetailsComponent,
    CommonEcommerceChartComponent
  ]
})
export class DashboardModule { }
