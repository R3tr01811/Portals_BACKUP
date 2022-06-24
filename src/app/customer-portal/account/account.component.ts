import { Component, OnInit } from '@angular/core';
import { AuthAPIService } from 'src/app/service/auth-api.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/user.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  user:any;
  constructor(private auth:AuthAPIService, private route: ActivatedRoute) {}

  ngOnInit(){
    // this.route.data.subscribe((response:any)=>{
    //   this.user = response.account;
    //   this.user = this.user.GET_LIST;
    //   //console.log(response.account);
    //   console.log(this.user.NAME1);
    // })
    this.user = this.auth.getUsr();
  }

}
