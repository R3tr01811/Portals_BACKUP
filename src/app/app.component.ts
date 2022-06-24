import { Component, OnInit } from '@angular/core';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test_portal';
  // loading = false;
  //
  // constructor(public router: Router) {
  //   this.router.events.subscribe(ev => {
  //     if (ev instanceof NavigationStart) {
  //       this.loading = true;
  //     }
  //     if (ev instanceof NavigationEnd || ev instanceof NavigationCancel || ev instanceof NavigationError) {
  //       this.loading = false;
  //     }
  //   });
  // }

}

