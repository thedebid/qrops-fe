import { Injectable } from '@angular/core';

import * as Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  private stompClient!: Stomp.Client;
  private orderNotifications$: Subject<any> = new Subject();

  constructor() {
    this.initializeWebSocketConnection();
  }

  private initializeWebSocketConnection(): void {
    const socket = new SockJS('http://localhost:8089/ws-orders');
    this.stompClient = Stomp.over(socket);
    this.stompClient?.connect(
      {},
      () => {
        console.log('WebSocket connected');
        this.stompClient?.subscribe('/topic/orders', (message) => {
          this.orderNotifications$.next(JSON.parse(message.body)); // emits messages
        });
      },
      (error) => {
        console.error('WebSocket error', error);
      }
    );
  }

  public getOrderNotifications(): Observable<any> {
    return this.orderNotifications$.asObservable();
  }
}
