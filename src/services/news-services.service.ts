import { Injectable } from '@angular/core';
import { News } from '../models/news';
import { updates, Maps, teams, players } from '../models/classexport';
import { Observable,of } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { tap, catchError, map} from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class NewsServicesService {

  private urlSource = 'http://localhost:3000/';

  getAllNews():Observable<News[]>{
    return this.http.get<News[]>(this.urlSource+"news").pipe(
      tap( listNews => listNews ),
      catchError(err => of([]))
    );
  }
  getAllUpdates():Observable<updates[]>{
    return this.http.get<updates[]>(this.urlSource+"updates").pipe(
      tap( listUpdates => listUpdates ),
      catchError(err => of([]))
    );
  }
  getAllMap():Observable<Maps[]>{
    return this.http.get<Maps[]>(this.urlSource+"maps").pipe(
      tap( listMaps => listMaps),
      catchError( err => of([]))
    )
  }
  getAllTeam():Observable<teams[]>{
    return this.http.get<teams[]>(this.urlSource+"teams").pipe(
      tap( listTeams => listTeams),
      catchError( err => of([]))
    )
  }

  getAllplayer():Observable<players[]>{
    return this.http.get<players[]>(this.urlSource+"players").pipe(
      tap( listplayer => listplayer),
      catchError( err => of([]))
    )
  }

  getPlayer(idPlayer):Observable<players[]>{
    return this.http.get<players[]>(this.urlSource+"players?id="+idPlayer).pipe(
      tap( listplayer => listplayer),
      catchError( err => of([]))
    )
  }

  getTeam(idTeam):Observable<teams[]>{
    return this.http.get<teams[]>(this.urlSource+"teams?id="+idTeam).pipe(
      tap( listTeams => listTeams),
      catchError( err => of([]))
    )
  }

  getPlayerFromTeam(idTeam):Observable<players[]>{
    return this.http.get<players[]>(this.urlSource+"players?idTeam="+idTeam).pipe(
      tap( listPlayers => listPlayers),
      catchError( err => of([]))
    )
  }

  getLeaderFromTeam(idTeam):Observable<players[]>{
    return this.http.get<players[]>(this.urlSource+"players?idTeam="+idTeam+"&leader=true").pipe(
      tap( listPlayers => listPlayers),
      catchError( err => of([]))
    )
  }

  constructor(
    private http:HttpClient
  ) { }
}
