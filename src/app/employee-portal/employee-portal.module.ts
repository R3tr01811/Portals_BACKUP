import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeePortalRoutingModule } from './employee-portal-routing.module';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { PaySlipComponent } from './pay-slip/pay-slip.component';
import { LeaveReqComponent } from './leave-req/leave-req.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    HomeComponent,
    AccountComponent,
    PaySlipComponent,
    LeaveReqComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    EmployeePortalRoutingModule
  ]
})
export class EmployeePortalModule { }
