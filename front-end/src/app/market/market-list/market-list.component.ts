import {Component, OnInit, ViewChild} from '@angular/core';
import {MarketService} from '../../shared/market.service';
import {GiphyService} from '../../shared/giphy.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Router} from '@angular/router';

@Component({
  selector: 'app-market-list',
  templateUrl: './market-list.component.html',
  styleUrls: ['./market-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class MarketListComponent implements OnInit  {

  markets: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'name', 'change', 'sell', 'buy'];
  expandedElement: any | null;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private marketService: MarketService,
    private giphyService: GiphyService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.marketService.getAllMarket().subscribe(data => {
      this.markets = new MatTableDataSource(data);
      for (const market of this.markets.data) {
        this.giphyService.get(market.name).subscribe(url => market.giphyUrl = url);
      }
      this.markets.paginator = this.paginator;
      this.markets.sort = this.sort;
    });
  }

  applyFilter(event: Event): any {
    const filterValue = (event.target as HTMLInputElement).value;
    this.markets.filter = filterValue.trim().toLowerCase();
  }

  deleteMarket(id: any): void {
    this.marketService.deleteMarket(id).subscribe(
      data => {
        console.log('Data :' + data + 'deleted');
        this.reloadData();
      },
      error => console.log('Deletion failed' + error)
    );
  }

  private reloadData(): void {
    this.router.navigate(['']).then(r => console.log('Action performed properly'));
  }
}
