import { Component, OnInit, Output, Input } from '@angular/core';
import { hotels } from './hotels-list';

interface TWeather {
  temperature: number;
  wind: number;
  icon: string;
}

interface TProfile {
  followers: number;
  following: number;
  photo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  hotels: object[];
  weather = hotels[0].weather;
  profile = hotels[0].profile;
  id = 0;
  ngOnInit() {
    this.hotels = hotels;
  }
  changeHotel(id: number) {
    this.id = id;
    this.weather = hotels[id].weather;
    this.profile = hotels[id].profile;
  }
}
