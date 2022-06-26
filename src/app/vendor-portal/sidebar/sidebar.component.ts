import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from "@angular/router";
import {AuthAPIService} from "../../service/auth-api.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  loading = false;
  constructor(public router: Router, public auth: AuthAPIService, private route: ActivatedRoute) {
    this.router.events.subscribe(ev => {
      if (ev instanceof NavigationStart) {
        this.loading = true;
      }
      if (ev instanceof NavigationEnd || ev instanceof NavigationCancel || ev instanceof NavigationError) {
        this.loading = false;
      }
    });
  }

  user:any;
  ngOnInit(){
    this.loadScript('../assets/js/app.js');
    // this.route.data.subscribe((response:any)=>{
    //   this.user = response.account;
    //   //console.log(response.account);
    //   //console.log(this.user.GET_LIST.NAME1);
    // })
    //console.log(this.user.email);
    this.user = this.auth.getUsr();
    //console.log(this.user);
  }

  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
