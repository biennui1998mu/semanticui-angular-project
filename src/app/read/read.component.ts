import { Component, OnInit, Input } from '@angular/core';
import { News } from '../../models/news';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  @Input() news:News;

  constructor() { }

  ngOnInit() {
  }

}
