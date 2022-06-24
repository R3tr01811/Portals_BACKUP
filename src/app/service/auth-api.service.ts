import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, map, Observable} from 'rxjs';
import {User} from '../user.model';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {catchError} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthAPIService {
  constructor(private http: HttpClient) {
  }

  userDetails:any;

  login(usrname: string, password: string): Observable<boolean> {
    return this.http.post<{ token: string , userDetails:any }>('http://localhost:3000/auth', {user: usrname, pass: password})
      .pipe(
        map(result => {
          localStorage.removeItem('access_token');
          localStorage.setItem('access_token', result.token);
          console.log(result.token);
          localStorage.setItem('userDetails',JSON.stringify(result.userDetails));
          //console.log(this.userDetails);
          return true;
        })
      );
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  getUsr() {
    return JSON.parse(localStorage.getItem('userDetails'));
    // return this.http.get<User>('http://localhost:3000/usrDet')
    //   .pipe(map((response: User) => {
    //     this.userDetails = response;
    //     return response
    //   }));
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }

  //Customer Portal APIs

  saleOrd(){
    return this.http.get('http://localhost:3000/customer/sale_order');
  }

  Delivery(){
    return this.http.get('http://localhost:3000/customer/delivery');
  }

  PaymentAge(){
    return this.http.get('http://localhost:3000/customer/payment');
  }

  CreditDebit(){
    return this.http.get('http://localhost:3000/customer/credit_debit');
  }

  Inquiry(){
    return this.http.get('http://localhost:3000/customer/credit_inqry');
  }

  Invoice(){
    return this.http.get('http://localhost:3000/customer/invoice');
  }

}
