import { Component, OnInit } from '@angular/core';
import { hotels } from '../hotels-list'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public hotels = hotels;
  public pathImg:string = 'assets/images/1.jpg';

  constructor() { }

  ngOnInit() {
  }
  onClick() {
//     pathImg = document.getElementsByClassName("abouthotel")[0].id;
    this.pathImg = 'assets/images/2.jpg';
//    window.alert(document.getElementsByClassName("abouthotel")[0].id);
  }
}
