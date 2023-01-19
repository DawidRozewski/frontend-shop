import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartSummary } from '../common/model/cart/cartSummary';
import { CartCommonService } from '../common/service/cart-common.service';
import { OrderDTO } from './model/orderDTO';
import { OrderSummary } from './model/orderSummary';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor( 
    private http: HttpClient,
    private cartCommonService: CartCommonService) { }

  getCart(id: number): Observable<CartSummary> {
    return this.cartCommonService.getCart(id);
  }

  placeOrder(order: OrderDTO): Observable<OrderSummary> {
    return this.http.post<OrderSummary>("/api/orders", order);
  }
}
