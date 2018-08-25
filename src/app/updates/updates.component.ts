import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { updates } from '../../models/classexport';
import { NewsServicesService } from '../../services/news-services.service';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.css']
})
export class UpdatesComponent implements OnInit {

  @Output() clickedupdatesOut = new EventEmitter<updates>();
  
  listUpdates:updates[] = [];
  constructor(
    private newsServices:NewsServicesService) { }

  updates:updates = null;
  
  ngOnInit() {
    this.newsServices.getAllUpdates().subscribe(
      listUpdates => {
        console.log(listUpdates);
        this.listUpdates = listUpdates;
      }
    )
  }
  onClick(updates){
    this.updates = updates;
    this.clickedupdatesOut.emit(updates);
  }

  back(){
    this.updates = null;
    this.clickedupdatesOut.emit(null);
  }

}
