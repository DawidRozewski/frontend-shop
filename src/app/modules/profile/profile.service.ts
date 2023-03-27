import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderListDTO } from './model/orderListDTO';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getOrders(): Observable<Array<OrderListDTO>> {
    return this.http.get<Array<OrderListDTO>>("/api/orders");
  }
}
