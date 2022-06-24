import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SidebarComponent} from "../customer-portal/sidebar/sidebar.component";
import {HomeComponent} from "./home/home.component";
import {AccountComponent} from "./account/account.component";
import {CreditDebitComponent} from "./credit-debit/credit-debit.component";
import {InvoiceComponent} from "./invoice/invoice.component";
import {PaymentComponent} from "./payment/payment.component";
import {PoComponent} from "./po/po.component";
import {RfqComponent} from "./rfq/rfq.component";
import {GoodsReceiptComponent} from "./goods-receipt/goods-receipt.component";
import {InvoiceDetComponent} from "./invoice-det/invoice-det.component";

const routes: Routes = [
  {
    path: '',
    component: SidebarComponent,
    children: [
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'account',
        component:AccountComponent
      },
      {
        path:'credit-debit',
        component:CreditDebitComponent
      },
      {
        path:'invoice',
        component:InvoiceComponent
      },
      {
        path:'payment',
        component:PaymentComponent
      },
      {
        path:'po',
        component:PoComponent
      },
      {
        path:'rfq',
        component:RfqComponent
      },
      {
        path:'goods-receipt',
        component:GoodsReceiptComponent
      },
    ]
  },
  {
    path:'invoice-det',
    component:InvoiceDetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorPortalRoutingModule { }
