import { Injectable } from '@angular/core';
import { News } from '../models/news';
import { fakenews } from '../models/fakenews';
import { fakeupdates } from '../models/fakeupdates';
import { updates } from '../models/classexport';

@Injectable({
  providedIn: 'root'
})
export class NewsServicesService {

  getAllNews():News[]{
    return fakenews;
  }
  getAllUpdates():updates[]{
    return fakeupdates;
  }
  constructor() { }
}
