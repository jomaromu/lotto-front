import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { ProjectDashboardComponent } from './project-dashboard/project-dashboard.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'default',
        component: DefaultComponent,
        data: {
          title: 'Default',
          breadcrumb: 'Default'
        }
      },
      {
        path: 'ecommerce',
        component: EcommerceComponent,
        data: {
          title: 'Ecommerce',
          breadcrumb: 'E-Commerce'
        }
      },
      {
        path: 'project-deshboard',
        component: ProjectDashboardComponent,
        data: {
          title: 'Project Management',
          breadcrumb: 'Project Management'
        }
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
