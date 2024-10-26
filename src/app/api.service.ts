import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:5000/api/atm';

  constructor(private http: HttpClient) {}

  deposit(request: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/deposit`, request);
  }

  withdraw(request: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/withdraw`, request);
  }

  transfer(request: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/transfer`, request);
  }

  getTransactionHistory(customerId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/transaction/${customerId}`);
  }

  getBalance(customerId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/balance/${customerId}`);
  }
}
