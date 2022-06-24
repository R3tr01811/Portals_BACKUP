import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthAPIService } from 'src/app/service/auth-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sale-order',
  templateUrl: './sale-order.component.html',
  styleUrls: ['./sale-order.component.css']
})
export class SaleOrderComponent implements OnInit {

  constructor(public auth: AuthAPIService, private router: Router, private route: ActivatedRoute) { }
  term:string;
  list:any;
  ngOnInit(): void {
    // this.auth.saleOrd()
    //   .subscribe((result:any)=>{
    //     console.log(result);
    //     this.list = result.GET_LIST;
    //   })
    // console.log(this.list);
    this.route.data.subscribe((response:any)=>{
      this.list = response.sale_order.GET_LIST.item;
      console.log(this.list);
      console.log(this.list[0]);
      //console.log(this.user.GET_LIST.NAME1);
    })

  }

  public isCompleted(value){
      return value === "Completed";
  }

}
