import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  

  constructor() { }
  @Input() weather: Object;

  ngOnInit() {
    this.weather={
      temperature: 12,
      wind: 11,
      icon: 'assets/icons/sun.png'
    }
  }

}
