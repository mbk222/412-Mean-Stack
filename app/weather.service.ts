import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  data: any;
  
  constructor(private http: HttpClient) {}

  getWeather(city) {
      return this.http.get(`http://localhost:3000/search?city=${city}`)
  }
}
