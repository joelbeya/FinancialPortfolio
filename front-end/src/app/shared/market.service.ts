import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarketService {

  constructor(private httpClient: HttpClient) { }

  getAllMarket(): Observable<any> {
    return this.httpClient.get('//localhost:8080/api/markets');
  }
}
