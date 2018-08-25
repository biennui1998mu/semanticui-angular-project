import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { ProComponent } from './pro/pro.component'
import { MapComponent } from './map/map.component';
import { TournamentComponent } from './tournament/tournament.component';
import { TeamComponent } from './team/team.component';

const router: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'pro', component: ProComponent},
  { path: 'map', component: MapComponent},
  { path: 'tournament', component: TournamentComponent},
  { path: 'team/:id', component: TeamComponent}
]


@NgModule({
  imports: [
    RouterModule.forRoot(router)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
