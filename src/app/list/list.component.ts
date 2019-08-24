import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Hotel } from '../hotels-list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  })
export class ListComponent {
  public pathImg = 'assets/images/1.jpeg';
  @Output() hotelChange = new EventEmitter();
  @Input() listhotels: Hotel[];
    constructor() {
    }

  onClick(hotel: Hotel) {
    function findPathByID(obj: Hotel[], fId: number): string {
      for (const key of obj) {
        if (fId === key.id) { return key.picture; }
      }
    }
    this.pathImg = findPathByID(this.listhotels, hotel.id);
    this.hotelChange.emit(hotel.id);
  }
}
