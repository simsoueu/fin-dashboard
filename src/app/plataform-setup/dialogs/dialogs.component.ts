import { Component, OnInit } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";

@Component({
  selector: "app-dialogs",
  templateUrl: "./dialogs.component.html",
  styleUrls: ["./dialogs.component.sass"]
})
export class DialogsComponent implements OnInit {
  name: string;
  salary: string;
  usernameGood: boolean;
  currendCardIndex: number;
  currentCard: any;
  validState: boolean;

  constructor(private route: Router) {}

  values: object;

  ngOnInit() {
    this.values = {};
    this.values["username"] = {
      name: "username",
      data: "",
      canGoBack: false,
      validState: true,
      prestine: true,
      index: 1,
      next: "salary",
      validation: { minLength: 2, maxLeng: 40 }
    };
    this.values["salary"] = {
      name: "salary",
      data: "",
      canGoBack: true,
      validState: false,
      prestine: true,
      index: 2,
      next: "goals",
      previous: "username"
    };
    this.values["goals"] = {
      name: "goals",
      data: "",
      canGoBack: true,
      validState: false,
      prestine: true,
      index: 2,
      previous: "salary"
    };
    this.currendCardIndex = 0;
    this.currentCard = this.values["username"];
  }

  confirm() {
    if (this.currentCard.name === "username") {
      this.currentCard.prestine = false;
      this.usernameGood = true;
      this.validState = true;
      this.currentCard = this.values[this.currentCard.next];
      return;
    }

    if (this.currentCard.name === "salary") {
      this.currentCard.prestine = false;
      this.currentCard = this.values[this.currentCard.next];
      return;
    }

    if (this.currentCard.name === "goals") {
      if (this.currentCard.data) {
        this.manageStorage();
      } else {
        this.currentCard.validState = false;
      }
    }
  }

  manageStorage() {
    let previousUser = JSON.parse(localStorage.getItem("real-admin-init"));
    const user = {
      username: this.values["username"].data,
      salary: this.values["salary"].data,
      goals: this.values["goals"].data,
      timestamp: new Date()
    };
    const obj = { username: user.username };

    if (!previousUser) {
      localStorage.setItem("real-admin-init", JSON.stringify([obj]));
    } else {
      previousUser.push(obj);
      localStorage.setItem("real-admin-init", JSON.stringify(previousUser));
    }

    localStorage.setItem(
      "real-admin-user-" + user["username"],
      JSON.stringify(user)
    );
    
    this.route.navigate(["/dashboard"], {
      queryParams: { returnUrl: user.username }
    });
  }

  onKey() {
    this.currentCard.validState = false;

    if (this.currentCard.validation) {
      if (
        this.currentCard.validation["minLenght"] > this.currentCard.data.length
      ) {
        this.currentCard.validState = false;
        return this.currentCard.validState;
      }

      if (
        this.currentCard.validation["maxLenght"] < this.currentCard.data.length
      ) {
        this.currentCard.validState = false;
        return this.currentCard.validState;
      }
    }
    this.currentCard.validState = true;
    return this.currentCard.validState;
  }

  previous() {
    const previous = this.currentCard.previous;
    if (this.currentCard.canGoBack && this.values[previous]) {
      this.currentCard = this.values[previous];
    }
  }
}
