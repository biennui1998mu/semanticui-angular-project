import { Injectable } from '@angular/core';
import { News } from '../models/news';
import { Maps, teams, players, JSONResponse } from '../models/classexport';
import { Observable,of } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { tap, catchError, map} from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class NewsServicesService {

  private urlSource = 'http://localhost:8000/api/';

  getAllNews():Observable<News[]>{
    return this.http.get<News[]>(this.urlSource+"news").pipe(
      tap( listNews => listNews ),
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
    return this.http.get<players[]>(this.urlSource+"players/"+idPlayer).pipe(
      tap( listplayer => listplayer),
      catchError( err => of([]))
    )
  }

  getTeam(idTeam):Observable<teams[]>{
    return this.http.get<teams[]>(this.urlSource+"teams/"+idTeam).pipe(
      tap( listTeams => listTeams),
      catchError( err => of([]))
    )
  }

  getPlayerFromTeam(idTeam):Observable<players[]>{
    return this.http.get<players[]>(this.urlSource+"teams/"+idTeam).pipe(
      //@ts-ignore
      tap( listPlayers => listPlayers.player),
      catchError( err => of([]))
    )
  }

  getLeaderFromTeam(idTeam):Observable<players[]>{
    return this.http.get<players[]>(this.urlSource+"teams/"+idTeam+"/leader").pipe(
      tap( listPlayers => listPlayers),
      catchError( err => of([]))
    )
  }

  searchPlayer(name:string):Observable<players[]>{
    let searchString = name.trim();
    if (searchString.length >2){
      return this.http.get<players[]>(this.urlSource+"players?name="+searchString).pipe(
        tap( listPlayers => listPlayers),
        catchError( err => of([]))
      )
    }
  }

  // UPLOAD TO SERVER////////////////////////////////////////////////////////////////////////////////

  uploadNews(formdata):Observable<JSONResponse[]>{
    if (formdata != null){
      return this.http.post<JSONResponse[]>(this.urlSource+"news/upload",formdata).pipe(
        tap( res => res),
        catchError( err => of([]))
      )
    }
  }
  uploadComment(commentData):Observable<JSONResponse[]>{
    if (commentData != null){
      return this.http.post<JSONResponse[]>(this.urlSource+"news/comment/upload",commentData).pipe(
        tap( res => res),
        catchError( err => of([]))
      )
    }
  }

  constructor(
    private http:HttpClient
  ) { }
}
