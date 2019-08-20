import { Component, OnInit, Output, Input } from '@angular/core';
import { hotels } from './hotels-list';

type TWeather = {
  temperature: number,
  wind: number,
  icon: string
};

type TProfile = {
  followers: number,
  following: number,
  photo: string
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  
  hotels:Object[];
  weather = new Object() as TWeather;
  profile = new Object() as TProfile;
  id:number = 0;
  n: number;
  
  ngOnInit() {
    this.hotels=hotels;
  }
  changeHotel(id:number) {
    this.id=id;
    this.weather=hotels[id]["weather"];
    // this.weather.icon = 'assets/icons/sun.png';
    switch (this.weather['icon']) {
      case 'sun': this.weather.icon = 'assets/icons/sun.png';
                  break;
      case 'rain': this.weather.icon = 'assets/icons/rain.png';
                  break;
      case 'cloud': this.weather.icon = 'assets/icons/cloud.png';
                  break;
      default:    break;
    }
    this.n=hotels[id]["profile"]["followers"];
    this.profile=hotels[id]["profile"];
  }
}
