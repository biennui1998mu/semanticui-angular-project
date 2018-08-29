import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { ProComponent } from './pro/pro.component'
import { MapComponent } from './map/map.component';
import { TournamentComponent } from './tournament/tournament.component';
import { TeamComponent } from './team/team.component';
import { PlayerComponent } from './player/player.component';
import { AuthorComponent } from './author/author.component';
import { SearchComponent } from './search/search.component';

const router: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'pro', component: ProComponent},
  { path: 'map', component: MapComponent},
  { path: 'tournament', component: TournamentComponent},
  { path: 'team/:id', component: TeamComponent},
  { path: 'player/:id', component: PlayerComponent},
  { path: 'author', component: AuthorComponent},
  { path: 'search', component: SearchComponent}
]


@NgModule({
  imports: [
    RouterModule.forRoot(router)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
