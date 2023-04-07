import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartSummary } from '../common/model/cart/cartSummary';
import { CartCommonService } from '../common/service/cart-common.service';
import { InitData } from './model/initData';
import { OrderDTO } from './model/orderDTO';
import { OrderSummary } from './model/orderSummary';
import { NotificationDTO } from './model/notificationDTO';

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

  getInitData(): Observable<InitData> {
    return this.http.get<InitData>("/api/orders/initData");
  }

  getStatus(hash: any): Observable<NotificationDTO> {
    return this.http.get<NotificationDTO>("/api/orders/notification/hash");
  }
}
