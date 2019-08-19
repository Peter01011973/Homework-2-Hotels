import { Component, OnInit } from '@angular/core';
import { hotels } from '../hotels-list'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public hotels = hotels;

  constructor() { }

  ngOnInit() {
  }

}
