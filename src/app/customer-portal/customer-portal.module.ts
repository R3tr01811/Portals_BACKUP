import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerPortalRoutingModule } from './customer-portal-routing.module';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AccountComponent } from './account/account.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { SaleOrderComponent } from './sale-order/sale-order.component';
import { PaymentComponent } from './payment/payment.component';
import { CreditDebitComponent } from './credit-debit/credit-debit.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { InquiryComponent } from './inquiry/inquiry.component';
import {FormsModule} from "@angular/forms";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {MatTabsModule} from "@angular/material/tabs";
import {MatTableModule} from "@angular/material/table";
import { InvoiceDetComponent } from './invoice-det/invoice-det.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({
  declarations: [
    HomeComponent,
    SidebarComponent,
    AccountComponent,
    DeliveryComponent,
    SaleOrderComponent,
    PaymentComponent,
    CreditDebitComponent,
    InvoiceComponent,
    InquiryComponent,
    InvoiceDetComponent
  ],
  imports: [
    Ng2SearchPipeModule,
    CommonModule,
    CustomerPortalRoutingModule,
    FormsModule,
    MatTabsModule,
    MatTableModule,
    MatProgressBarModule,
    MatProgressSpinnerModule
  ]
})
export class CustomerPortalModule { }
