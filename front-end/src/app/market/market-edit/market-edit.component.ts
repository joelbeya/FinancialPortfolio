import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MarketService} from '../../shared/market.service';
import {GiphyService} from '../../shared/giphy.service';
import {Subscription} from 'rxjs';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-market-edit',
  templateUrl: './market-edit.component.html',
  styleUrls: ['./market-edit.component.scss']
})
export class MarketEditComponent implements OnInit, OnDestroy {

  market: any = {};
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private marketService: MarketService,
    private giphyService: GiphyService
  ) {
  }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(params => {
      const name = params.id;
      if (name) {
        this.marketService.getMarketList(name).subscribe((market: any) => {
          if (market) {
            this.market = market[0];
            this.giphyService.get(market[0].name).subscribe(url => market[0].giphyUrl = url);
          } else {
            this.router.navigate(['']).then(r =>
              console.log(`Market with name '${name}' not found, returning to list` + r));
          }
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  save(form: NgForm): any {
    if (this.market.id) {
      this.marketService.updateMarket(this.market.id, form).subscribe(
        () => this.router.navigate(['']).then(r => console.log('Updating Market ' + r)),
        error => console.log('Update does not work properly' + error)
      );
    } else {
      this.marketService.createMarket(form).subscribe(
        () => this.router.navigate(['']).then(r => console.log('Create Market' + r)),
        error => console.log('Create does not work properly' + error)
      );
    }
  }
}
