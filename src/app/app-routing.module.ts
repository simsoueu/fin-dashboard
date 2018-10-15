import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { AboutComponent } from "./about/about.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PlataformSetupComponent } from "./plataform-setup/plataform-setup.component";
import { PlataformSetupService } from "./plataform-setup.service";
import { ProfileComponent } from "./profile/profile.component";
import { BalancoGastosComponent } from "./balanco-gastos/balanco-gastos.component";

const firstUse = localStorage.getItem("real-admin-setup-done");

const routes: Routes = [
  { path: "login", component: PlataformSetupComponent },
  { path: "about", component: AboutComponent },
  { path: "profile", component: ProfileComponent },
  {
    path: "",
    component: DashboardComponent,
    canActivate: [PlataformSetupService]
  },
  { path: "balanco", component: BalancoGastosComponent },
  { path: "**", component: NotfoundComponent },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [PlataformSetupService],
  exports: [RouterModule]
})
export class AppRoutingModule {}
