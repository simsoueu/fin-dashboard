import { Component, OnInit } from "@angular/core";
import { PlataformSetupService } from "../plataform-setup.service";
import { forEach } from "@angular/router/src/utils/collection";
import { DashboardService } from "./dashboard.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.sass"]
})
export class DashboardComponent implements OnInit {
  private users: any;
  private lastUserAdded: any;
  private currentUser: any;
  private expenses: any;
  private allExpensesLoaded: boolean;

  constructor(
    private plataformService: PlataformSetupService,
    private dashboardService: DashboardService
  ) {}

  loadAllExpenses() {
    this.expenses = this.dashboardService.getLastExpenses();

    this.expenses.forEach(item => {
      item.dateStr = item.date.toLocaleDateString();
    });

    this.allExpensesLoaded = true;
  }
  ngOnInit() {
    this.users = this.plataformService.getUsers();
    this.lastUserAdded = this.plataformService.getLastUserAdded();

    this.expenses = this.dashboardService.getExpensensLastTwoWeeks();

    this.expenses.forEach(item => {
      item.dateStr = item.date.toLocaleDateString();
    });

    this.users.forEach(u => {
      if (isNaN(u.timeSinceCreation)) {
        u.timeSinceCreation = "Hoje";
      }
      if (u.timeSinceCreation === 1) {
        u.timeSinceCreation = "Hoje";
      } else if (u.timeSinceCreation === 2) {
        u.timeSinceCreation = "Ontem";
      } else if (u.timeSinceCreation >= 3) {
        u.timeSinceCreation = u.timeSinceCreation + " dias atras";
      }
    });
    console.log(this.users);
  }

  selectUser(user) {
    this.currentUser = user;
  }

  run() {}
}
