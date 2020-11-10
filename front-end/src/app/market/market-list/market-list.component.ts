import { Component, OnInit } from '@angular/core';
import {MarketService} from '../../shared/market.service';
import {GiphyService} from '../../shared/giphy.service';

@Component({
  selector: 'app-market-list',
  templateUrl: './market-list.component.html',
  styleUrls: ['./market-list.component.scss']
})
export class MarketListComponent implements OnInit {

  markets: Array<any>;
  displayedColumns: string[] = ['id', 'name', 'change', 'sell', 'buy'];

  constructor(
    private marketService: MarketService,
    private giphyService: GiphyService
  ) { }

  ngOnInit(): void {
    this.marketService.getAllMarket().subscribe(data => {
      this.markets = data;
      console.log(this.markets[0].name);
      for (const market of this.markets) {
        this.giphyService.get(market.name).subscribe(url => market.giphyUrl = url);
      }
    });
  }

}
