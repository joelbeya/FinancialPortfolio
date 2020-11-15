import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarketService {

  private baseUrl = 'http://localhost:8080/api/';

  constructor(private httpClient: HttpClient) {
  }

  getMarketList(name: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/markets/name/${name}`);
  }

  getAllMarket(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/markets`);
  }

  createMarket(market: object): Observable<object> {
    return this.httpClient.post(`${this.baseUrl}/market/create`, market);
  }

  updateMarket(id: number, market: object)
    : Observable<object> {
    return this.httpClient.put(`${this.baseUrl}/market/${id}`, market);
  }

  deleteMarket(id: number): Observable<any> {
    return this.httpClient.delete(
      `${this.baseUrl}/market/delete/${id}`,
      {responseType: 'text'}
    );
  }

  deleteAllMarket(): Observable<any> {
    return this.httpClient.delete(
      `${this.baseUrl}/markets/delete/all`,
      {responseType: 'text'}
    );
  }
}
