import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorPortalRoutingModule } from './vendor-portal-routing.module';
import { CreditDebitComponent } from './credit-debit/credit-debit.component';
import { RfqComponent } from './rfq/rfq.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { GoodsReceiptComponent } from './goods-receipt/goods-receipt.component';
import { PoComponent } from './po/po.component';
import { PaymentComponent } from './payment/payment.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { InvoiceDetComponent } from './invoice-det/invoice-det.component';


@NgModule({
  declarations: [
    CreditDebitComponent,
    RfqComponent,
    InvoiceComponent,
    GoodsReceiptComponent,
    PoComponent,
    PaymentComponent,
    SidebarComponent,
    HomeComponent,
    AccountComponent,
    InvoiceDetComponent
  ],
  imports: [
    CommonModule,
    VendorPortalRoutingModule
  ]
})
export class VendorPortalModule { }
