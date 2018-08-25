import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewsServicesService } from '../services/news-services.service';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { NewsComponent } from './news/news.component';
import { ReadComponent } from './read/read.component';
import { PlayerComponent } from './player/player.component';
import { TeamComponent } from './team/team.component';
import { MapComponent } from './map/map.component';
import { TournamentComponent } from './tournament/tournament.component';
import { MapDetailComponent } from './map-detail/map-detail.component';
import { ProComponent } from './pro/pro.component';
import { UpdatesComponent } from './updates/updates.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    NewsComponent,
    ReadComponent,
    PlayerComponent,
    TeamComponent,
    MapComponent,
    TournamentComponent,
    MapDetailComponent,
    ProComponent,
    UpdatesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    NewsServicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
