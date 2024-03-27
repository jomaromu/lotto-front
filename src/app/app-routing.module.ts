import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContentComponent } from "./shared/component/layout/content/content.component";
import { dashData } from "./shared/routes/routes";
import { FullComponent } from "./shared/component/layout/full/full.component";
import { fullRoutes } from "./shared/routes/full-routes";
import { AdminGuard } from "./shared/guard/admin.guard";
import { LoginComponent } from "./auth/login/login.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/dashboard/default",
    pathMatch: "full",
  },
  {
    path: "auth/login",
    component: LoginComponent,
  },
  {
    path: "",
    component: ContentComponent,
    children: dashData,
    canActivate: [AdminGuard],
  },
  {
    path: "",
    component: FullComponent,
    children: fullRoutes,
  },
  {
    path: "**",
    redirectTo: "/dashboard/default",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
