import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-frofile',
  templateUrl: './frofile.component.html',
  styleUrls: ['./frofile.component.css']
})
export class FrofileComponent implements OnInit {

  constructor() { }
  @Input() profile: Object;
  
  
  ngOnInit() {
    this.profile={
      followers: 112,
      following: 11,
      photo: 'assets/images/b1.jpeg'
    }
  }

}
