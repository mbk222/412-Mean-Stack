import { Component, SystemJsNgModuleLoader } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-app-angular';

  data;
  mockData = [
    {
      feels_like: 293.64,
      humidity: 93,
      pressure: 1011,
      temp: 292.56,
      temp_max: 293.71,
      temp_min: 291.48,
    },
    {
      feels_like: 293.64,
      humidity: 93,
      pressure: 1011,
      temp: 292.56,
      temp_max: 293.71,
      temp_min: 291.48,
    },
  ]

  getMock() {
    this.data = this.mockData
  }

}
