import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AccountComponent} from "./account/account.component";
import {CreditDebitComponent} from "./credit-debit/credit-debit.component";
import {InvoiceComponent} from "./invoice/invoice.component";
import {PaymentComponent} from "./payment/payment.component";
import {PoComponent} from "./po/po.component";
import {RfqComponent} from "./rfq/rfq.component";
import {GoodsReceiptComponent} from "./goods-receipt/goods-receipt.component";
import {InvoiceDetComponent} from "./invoice-det/invoice-det.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {CreditDebitResolveService} from "./credit-debit/credit-debit-resolve.service";
import {InvoiceResolveService} from "./invoice/invoice-resolve.service";
import {PaymentResolveService} from "./payment/payment-resolve.service";
import {PoResolveService} from "./po/po-resolve.service";
import {RfqResolveService} from "./rfq/rfq-resolve.service";
import {GoodsReceiptResolveService} from "./goods-receipt/goods-receipt-resolve.service";
import {PaymentInitComponent} from "./payment-init/payment-init.component";

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
        path:'credit_debit',
        component:CreditDebitComponent,
        resolve:{ credebit:CreditDebitResolveService }
      },
      {
        path:'invoice',
        component:InvoiceComponent,
        resolve:{ invoice:InvoiceResolveService }
      },
      {
        path:'payment',
        component:PaymentComponent,
        resolve:{ payment:PaymentResolveService }
      },
      {
        path:'payment_init',
        component:PaymentInitComponent
      },
      {
        path:'po',
        component:PoComponent,
        resolve:{ po: PoResolveService }
      },
      {
        path:'rfq',
        component:RfqComponent,
        resolve:{ rfq:RfqResolveService }
      },
      {
        path:'goods_receipt',
        component:GoodsReceiptComponent,
        resolve:{ goods:GoodsReceiptResolveService }
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
