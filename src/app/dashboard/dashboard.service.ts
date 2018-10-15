import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class DashboardService {
  expenses = [
    {
      id: 1,
      title: "livro comprado",
      type: "pessoal",
      valor: 32,
      description: "",
      date: new Date("03/10/2018")
    },
    {
      id: 2,
      title: "gastos com combustivel",
      type: "pessoal",
      valor: 200,
      description: "",
      date: new Date("04/10/2018")
    },
    {
      id: 3,
      title: "ingressos para o cinema",
      type: "pessoal",
      valor: 50,
      description: "",
      date: new Date("04/15/2018")
    },
    {
      id: 4,
      title: "pagamento emprestimo Sergio",
      type: "pessoal",
      valor: 100,
      description: "",
      date: new Date("05/01/2018")
    },
    {
      id: 5,
      title: "pagamento emprestimo Sergio",
      type: "pessoal",
      valor: 100,
      description: "",
      date: new Date("10/09/2018")
    },
    {
      id: 6,
      title: "pagamento prestacao da moto",
      type: "pessoal",
      valor: 100,
      description: "",
      date: new Date("10/09/2018")
    },
    {
      id: 7,
      title: "pagamento conta de energia",
      type: "pessoal",
      valor: 100,
      description: "",
      date: new Date("10/05/2018")
    }
  ];

  constructor(private http: HttpClient) {}

  getLastExpenses() {
    return this.expenses;
  }

  getExpensensLastTwoWeeks() {
    let today = new Date();
    let twoWeeksAgo = new Date(today - 14 * 24 * 60 * 60 * 1000);
    twoWeeksAgo.setHours(0, 0, 0);
    return this.expenses.filter(item => item.date > twoWeeksAgo);
  }
}
