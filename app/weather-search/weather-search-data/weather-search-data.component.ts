import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-search-data',
  templateUrl: './weather-search-data.component.html',
  styleUrls: ['./weather-search-data.component.css']
})
export class WeatherSearchDataComponent implements OnInit {
  @Input() weatherData

  constructor() { }

  ngOnInit(): void {
  }

}
