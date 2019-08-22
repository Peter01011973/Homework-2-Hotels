import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  })
export class ListComponent {
  public pathImg = 'assets/images/1.jpeg';
  @Output() hotelChange = new EventEmitter();
  @Input() listhotels: object[];
    constructor() {
    }

  onClick(e: any) {
    function findPathByID(obj: object[], fId: number): string {
      const cId = 'id';
      const picture = 'picture';
      for (const key of obj) {
        if (fId === key[cId]) { return key[picture]; }
      }
    }

    e = e || window.event;
    e = e.target || e.srcElement;
    const id: number = Number(e.id);
    this.pathImg = findPathByID(this.listhotels, id);
    this.hotelChange.emit(id);
  }
}
