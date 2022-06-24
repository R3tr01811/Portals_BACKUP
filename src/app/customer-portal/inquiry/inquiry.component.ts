import { Component, OnInit } from '@angular/core';
import {AuthAPIService} from "../../service/auth-api.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.css']
})

export class InquiryComponent implements OnInit {
  list:any
  term:any;
  constructor(public auth: AuthAPIService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe((response:any)=>{
      this.list = response.inquiry.GET_LIST.item;
      console.log(this.list);
      //console.log(this.list[0]);
      //console.log(this.user.GET_LIST.NAME1);
    })
  }
}
