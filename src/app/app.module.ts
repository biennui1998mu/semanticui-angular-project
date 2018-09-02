import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { NewsServicesService } from '../services/news-services.service';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { NewsComponent } from './news/news.component';
import { PlayerComponent } from './player/player.component';
import { TeamComponent } from './team/team.component';
import { MapComponent } from './map/map.component';
import { TournamentComponent } from './tournament/tournament.component';
import { ProComponent } from './pro/pro.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthorComponent } from './author/author.component';
import { SearchComponent } from './search/search.component';
import { UpdatenewsComponent } from './updatenews/updatenews.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    NewsComponent,
    PlayerComponent,
    TeamComponent,
    MapComponent,
    TournamentComponent,
    ProComponent,
    AuthorComponent,
    SearchComponent,
    UpdatenewsComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    NewsServicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
