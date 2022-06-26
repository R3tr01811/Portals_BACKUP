import { Component, OnInit } from '@angular/core';
import {AuthAPIService} from "../../service/auth-api.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-po',
  templateUrl: './po.component.html',
  styleUrls: ['./po.component.css']
})
export class PoComponent implements OnInit {

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
