import { Component, OnInit } from '@angular/core';
import {AuthAPIService} from "../../service/auth-api.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})

export class DeliveryComponent implements OnInit {

  constructor(public auth: AuthAPIService, private router: Router, private route: ActivatedRoute) { }

  list_d:any;
  list_i:any;
  //dataSource:any;
  //displayedColumns:any;
  term: any;
  ngOnInit(): void {
    this.route.data.subscribe((response:any)=>{
      this.list_d = response.delivery.DEL_HEAD.item;
      this.list_i = response.delivery.DEL_ITEM.item;
      console.log(this.list_d[0]);
      console.log(this.list_i[3]);
      //console.log(this.list[0]);
      //console.log(this.user.GET_LIST.NAME1);
    })
    //this.dataSource = this.list_d;
  }

  parseInt(value: string) {
    return parseInt(value);
  }
}
