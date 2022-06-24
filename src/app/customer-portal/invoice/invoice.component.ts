import { Component, OnInit } from '@angular/core';
import {AuthAPIService} from "../../service/auth-api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subject} from "rxjs";
import {SharedServiceService} from "../../service/shared-service.service";

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  list_i:any;
  list_d:any;
  term:any;
  list:any;
  constructor(public auth: AuthAPIService, private router: Router, private route: ActivatedRoute, private service: SharedServiceService) { }

  ngOnInit(): void {
    this.route.data.subscribe((response:any)=>{
      this.list_i = response.invoice.ITEM.item;
      this.list_d = response.invoice.HEAD.item;
      console.log(this.list_i);
      // console.log(this.list_d);

      //console.log(this.list[0]);
      //console.log(this.user.GET_LIST.NAME1);
    })
    //console.log(this.list);
    console.log("subject")
  }

  rowClick(index){
    // console.log(data);
    // console.log(index);
    this.list = {
      "HEAD":this.list_d[index],
      "ITEM":this.list_i[index]
    }
    //this.service.setJSONData(this.list);
    sessionStorage.setItem('data',JSON.stringify(this.list));
    // window.open("http://localhost:4200/portal/invoice_detail", '_blank');
    this.router.navigate(['/portal/invoice_detail'])
  }

}
