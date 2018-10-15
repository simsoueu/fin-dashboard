import { Component, OnInit } from "@angular/core";
import { Chart } from "chart.js";
import { DashboardService } from "../dashboard/dashboard.service";

@Component({
  selector: "app-balanco-gastos",
  templateUrl: "./balanco-gastos.component.html",
  styleUrls: ["./balanco-gastos.component.sass"]
})
export class BalancoGastosComponent implements OnInit {
  chart = [];

  weatherDates = [];
  expensesDates: any[];
  expensesAmount: any[];
  expensesAvg: any[];
  expensesSum: any[];
  private sumExpendend: number;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.expensesAvg = [];
    this.expensesSum = [];
    this.weatherDates = this.dashboardService.getLastExpenses();
    this.expensesDates = this.weatherDates.map(el =>
      el.date.toLocaleDateString()
    );
    this.expensesAmount = this.weatherDates.map(el => el.valor);
    this.sumExpendend = 0;
    for (let index = 0; index < this.expensesAmount.length; index++) {
      this.sumExpendend += this.expensesAmount[index];
    }

    // for (let index = 0; index < this.expensesAmount.length; index++) {
    //   if (index > 0) {
    //     this.expensesSum.push(this.expensesAmount[index]);
    //   } else {
    //     this.expensesSum.push(
    //       this.expensesAmount[index] + this.expensesAmount[index - 1]
    //     );
    //   }
    // }

    // for (let index = 0; index < this.expensesAmount.length; index++) {
    //   const acc = this.expensesSum[index];
    //   const prev = this.expensesSum[index - 1];
    //   if (index === 0) {
    //     this.expensesAvg.push(this.expensesSum[index]);
    //   } else {
    //     this.expensesAvg.push(
    //       (this.expensesSum[index] + this.expensesSum[index - 1]) / (index + 1)
    //     );
    //   }
    // }

    this.chart = new Chart("canvas", {
      type: "line",
      data: {
        labels: this.expensesDates,
        datasets: [
          {
            data: this.expensesAmount,
            borderColor: "red",
            fill: false
          }
        ]
      },

      // #3cba9f
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              display: true
            }
          ],
          yAxes: [
            {
              display: true
            }
          ]
        }
      }
    });
  }
}
