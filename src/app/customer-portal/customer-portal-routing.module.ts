import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
// import { AccountResolveService } from './account/account-resolve.service';
import { DeliveryResolverService } from './delivery/delivery-resolver.service';
import {DeliveryComponent} from "./delivery/delivery.component";
import {SaleOrderComponent} from "./sale-order/sale-order.component";
import {SaleOrderResolverService} from "./sale-order/sale-order-resolver.service";
import {PaymentResolveService} from "./payment/payment-resolve.service";
import {PaymentComponent} from "./payment/payment.component";
import {CreditDebitComponent} from "./credit-debit/credit-debit.component";
import {CreditDebitResolveService} from "./credit-debit/credit-debit-resolve.service";
import {InvoiceComponent} from "./invoice/invoice.component";
import {InquiryComponent} from "./inquiry/inquiry.component";
import {InquiryResolveService} from "./inquiry/inquiry-resolve.service";
import {InvoiceResolveService} from "./invoice/invoice-resolve.service";
import {InvoiceDetComponent} from "./invoice-det/invoice-det.component";
// import {AuthResolveService} from "../auth/auth-resolve.service";

const routes: Routes = [
  {
    path: '',
    component: SidebarComponent,
    children: [
      { path: 'home',
        component:HomeComponent,
      },
      { path: 'account',
        component:AccountComponent,
      },
      { path: 'delivery',
        component:DeliveryComponent,
        resolve:{ delivery: DeliveryResolverService}
      },
      { path: 'sale_order',
        component:SaleOrderComponent,
        resolve:{ sale_order: SaleOrderResolverService }
      },
      { path: 'payment',
        component:PaymentComponent,
        resolve:{ payment: PaymentResolveService }
      },
      { path: 'credit_debit',
        component:CreditDebitComponent,
        resolve:{ credit_debit: CreditDebitResolveService }
      },
      { path: 'invoice',
        component:InvoiceComponent,
        resolve:{ invoice: InvoiceResolveService }
      },
      { path: 'inquiry',
        component:InquiryComponent,
        resolve:{ inquiry: InquiryResolveService}
      }
    ],
    // resolve:{ account: AuthResolveService}
  },
  {
    path:"invoice_detail",
    component:InvoiceDetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerPortalRoutingModule { }
