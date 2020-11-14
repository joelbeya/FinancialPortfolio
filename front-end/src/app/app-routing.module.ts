import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MarketListComponent} from './market/market-list/market-list.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {MarketEditComponent} from './market/market-edit/market-edit.component';

const routes: Routes = [
  {path: '', component: MarketListComponent, pathMatch: 'full'},
  {
    path: 'market', children: [
      {path: '', redirectTo: 'list', pathMatch: 'full'},
      {path: 'list', component: MarketListComponent},
      {path: 'edit', component: MarketEditComponent},
    ]
  },
  {path: 'page-not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: 'page-not-found', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
