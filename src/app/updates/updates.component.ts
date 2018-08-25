import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { updates } from '../../models/classexport';
import { NewsServicesService } from '../../services/news-services.service';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.css']
})
export class UpdatesComponent implements OnInit {
  @Input() aupdates:updates = null;
  @Input() clickedupdates = false;
  @Output() clickedupdatesOut = new EventEmitter<updates>();
  
  listUpdates:updates[] = [];
  constructor(
    private newsServices:NewsServicesService) { }
  
  ngOnInit() {
    this.listUpdates = this.newsServices.getAllUpdates();
  }
  onClick(updates){
    this.aupdates = updates;
    this.clickedupdates = true;
    this.clickedupdatesOut.emit(updates);
  }

  back(){
    this.aupdates = null;
    this.clickedupdates = false;
    this.clickedupdatesOut.emit(null);
  }

}
