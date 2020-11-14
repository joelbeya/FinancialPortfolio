import {Component, OnInit, ViewChild} from '@angular/core';
import {MarketService} from '../../shared/market.service';
import {GiphyService} from '../../shared/giphy.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-market-list',
  templateUrl: './market-list.component.html',
  styleUrls: ['./market-list.component.scss']
})
export class MarketListComponent implements OnInit  {

  markets: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'name', 'change', 'sell', 'buy'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private marketService: MarketService,
    private giphyService: GiphyService
  ) { }

  ngOnInit(): void {
    this.marketService.getAllMarket().subscribe(data => {
      this.markets = new MatTableDataSource(data);
      for (const market of this.markets.data) {
        this.giphyService.get(market.name).subscribe(url => market.giphyUrl = url);
      }
      this.markets.sort = this.sort;
      this.markets.paginator = this.paginator;
    });
  }

  applyFilter(event: Event): any {
    const filterValue = (event.target as HTMLInputElement).value;
    this.markets.filter = filterValue.trim().toLowerCase();
  }
}
