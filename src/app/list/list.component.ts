import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  })
export class ListComponent {
  public pathImg: string = 'assets/images/1.jpeg';
  @Output() hotelChange = new EventEmitter();
  @Input() listhotels:Object[];
  
  constructor() { 
  }

  ngOnInit() {
   }

  onClick(e:any) {
    function findPathByID(obj:Object[],id:number):string {
      for (let i=0; i< obj.length; i++) {
          if (id === obj[i]["id"]) {return obj[i]["picture"]}
      }
    }

    e = e || window.event;
    e =  e.target || e.srcElement;
    let id:number = Number(e.id);
    this.pathImg = findPathByID(this.listhotels,id);
    this.hotelChange.emit(id);
  }
}
