import { Component, OnInit } from '@angular/core';
import {AuthAPIService} from "../../service/auth-api.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-credit-debit',
  templateUrl: './credit-debit.component.html',
  styleUrls: ['./credit-debit.component.css']
})
export class CreditDebitComponent implements OnInit {

  constructor(public auth: AuthAPIService, private router: Router, private route: ActivatedRoute) { }

  list_c:any;
  list_d:any;
  term: any;

  ngOnInit(): void {
    this.route.data.subscribe((response:any)=>{
      this.list_c = response.credit_debit.CREDIT_LIST.item;
      this.list_d = response.credit_debit.DEBIT_LIST.item;
      console.log(this.list_c);
      console.log(this.list_d);
      //console.log(this.list[0]);
      //console.log(this.user.GET_LIST.NAME1);
    })
  }

}
