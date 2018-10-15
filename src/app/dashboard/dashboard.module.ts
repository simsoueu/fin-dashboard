import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

// import { NgProgressModule } from '@ngx-progressbar/core';

import { DashboardComponent } from "./dashboard.component";

import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { DashboardService } from "./dashboard.service";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [DashboardComponent, DashboardService],
  imports: [CommonModule, FormsModule, NgbModule],
  exports: [DashboardComponent]
})
export class AppModule {}
