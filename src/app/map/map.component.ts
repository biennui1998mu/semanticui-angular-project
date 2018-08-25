import { Component, OnInit, Input } from '@angular/core';
import { Maps } from "../../models/classexport";
import { NewsServicesService } from '../../services/news-services.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  listMaps:Maps[] = [];

  constructor(private newsServices:NewsServicesService) { 
  }

  ngOnInit() {
    this.newsServices.getAllMap().subscribe(
      listMaps => {
        this.listMaps = listMaps;
      }
    )
  }

  selectmap: Maps=null;
  onSelect(map: Maps): void {
    this.selectmap = map;
  }

  selectintro(){
    this.selectmap = null;
  }
}
