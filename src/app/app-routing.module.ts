import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { ProComponent } from './pro/pro.component'
import { MapComponent } from './map/map.component';
import { TournamentComponent } from './tournament/tournament.component';
import { MapDetailComponent } from './map-detail/map-detail.component';

const router: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'pro', component: ProComponent},
  { path: 'map', component: MapComponent},
    { path: 'map/:id', component: MapDetailComponent},
  { path: 'tournament', component: TournamentComponent}
]


@NgModule({
  imports: [
    RouterModule.forRoot(router)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
