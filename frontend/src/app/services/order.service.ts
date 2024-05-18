import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../shared/models/Order';
import { ORDER_CREATE_URL, ORDER_NEW_FOR_CURRENT_USER_URL, ORDER_PAY_URL, ORDER_TRACK_URL } from '../shared/constants/urls';
import { Observable } from 'rxjs';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient,private cartService:CartService) { }

  create(order:Order){
    return this.http.post<Order>(ORDER_CREATE_URL,order);
  }

  getNewOrderForCurrentUser():Observable<Order>{
    return this.http.get<Order>(ORDER_NEW_FOR_CURRENT_USER_URL);
  }

  pay(order:Order): Observable<string> {
    return this.http.post<string>(ORDER_PAY_URL,order);
  }

  trackOrderById(id:number): Observable<Order>{
    this.cartService.clearCart();
    console.log("hii");
    return this.http.get<Order>(ORDER_TRACK_URL + id);
  }

}
