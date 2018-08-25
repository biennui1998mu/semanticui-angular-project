import { Injectable } from '@angular/core';
import { News } from '../models/news';
import { updates, Maps, teams } from '../models/classexport';
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
    return this.http.get<teams[]>(this.urlSource+"").pipe(
      tap( listTeams => listTeams),
      catchError( err => of([]))
    )
  }

  constructor(
    private http:HttpClient
  ) { }
}
