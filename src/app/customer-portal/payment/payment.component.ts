import { Component, OnInit } from '@angular/core';
import {AuthAPIService} from "../../service/auth-api.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(public auth: AuthAPIService, private router: Router, private route: ActivatedRoute) { }

  list:any;
  term:any;
  select:any;
  ngOnInit(): void {
    this.route.data.subscribe((response:any)=>{
      this.list = response.payment.LIST.item;
      console.log(this.list);
      //console.log(this.list[0]);
      //console.log(this.user.GET_LIST.NAME1);
    })
  }

  Credebit = value => {
    return value !== "H" ? "Debit" : "Credit";
  };

}
