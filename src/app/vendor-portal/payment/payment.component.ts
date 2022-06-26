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
  term:string;
  list:any;

  ngOnInit(): void {
    this.route.data.subscribe((response:any)=>{
      //this.list = response.sale_order.GET_LIST.item;
      console.log(response);
    })
  }

}
