import { Component, OnInit, Input } from '@angular/core';
import { News } from '../../models/news';
import { updates } from '../../models/classexport';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  @Input() news:News;
  @Input() updates:updates;

  constructor() { }

  ngOnInit() {
  }

}
