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
  
  ngOnInit() {
    this.hotels=hotels;
  }
  changeHotel(id:number) {
    this.id=id;
    this.weather=hotels[id]["weather"];
    this.profile=hotels[id]["profile"];
  }
}
