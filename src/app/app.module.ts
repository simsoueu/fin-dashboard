import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

// import { NgProgressModule } from '@ngx-progressbar/core';
// import { NgProgressRouterModule } from '@ngx-progressbar/router';
import { AppComponent } from "./app.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { AppRoutingModule } from "./app-routing.module";

import { AboutComponent } from "./about/about.component";
import { NavTopComponent } from "./nav-top/nav-top.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PlataformSetupComponent } from "./plataform-setup/plataform-setup.component";
import { DialogsComponent } from "./plataform-setup/dialogs/dialogs.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { ProfileComponent } from "./profile/profile.component";
import { BalancoGastosComponent } from "./balanco-gastos/balanco-gastos.component";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NotfoundComponent,
    AboutComponent,
    NavTopComponent,
    DashboardComponent,
    PlataformSetupComponent,
    DialogsComponent,
    ProfileComponent,
    BalancoGastosComponent
  ],
  imports: [
    // NgProgressModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule
    // NgProgressRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
