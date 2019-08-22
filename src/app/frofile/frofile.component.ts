import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-frofile',
  templateUrl: './frofile.component.html',
  styleUrls: ['./frofile.component.css']
})
export class FrofileComponent implements OnInit {

  constructor() { }
  @Input() profile: object;
  ngOnInit() {
  }
}
