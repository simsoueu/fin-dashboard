import { Injectable } from "@angular/core";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { NgbModal, NgbModalConfig } from "@ng-bootstrap/ng-bootstrap";

@Injectable()
export class PlataformSetupService implements CanActivate {
  users: any;
  usersData: any;
  currentUser: string;

  constructor(private router: Router, private modalService: NgbModal) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.users = [];
    this.users = JSON.parse(localStorage.getItem("real-admin-init"));

    if (this.users) {
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(["/login"], { queryParams: { returnUrl: state.url } });
    return false;
  }

  getUsers() {
    let result = [];
    let today = new Date();
    this.users.forEach(name => {
      let u = JSON.parse(
        localStorage.getItem("real-admin-user-" + name["username"])
      );
      let timeDiff = Math.abs(
        today.getTime() - new Date(u.timestamp).getTime()
      );
      let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
      u["timeSinceCreation"] = diffDays;
      result.push(u);
    });
    console.log(result);

    this.usersData = result;
    return this.usersData;
  }

  getLastUserAdded() {
    if (!this.usersData) {
      this.getUsers();
    }

    if (this.usersData) {
      let sz = this.usersData.length - 1;
      return this.usersData[sz];
    }
    return undefined;
  }
}
