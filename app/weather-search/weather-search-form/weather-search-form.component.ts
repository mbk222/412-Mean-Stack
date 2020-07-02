import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-weather-search-form',
  templateUrl: './weather-search-form.component.html',
  styleUrls: ['./weather-search-form.component.css']
})
export class WeatherSearchFormComponent implements OnInit {
  form: FormGroup;

  constructor(private weather: WeatherService) {
    this.form = new FormGroup({
      search: new FormControl(null, [Validators.required])
    })
   }

  ngOnInit(): void {}

  searchByCity() {
    console.warn(this.form.controls.search.value)
    this.weather.getWeather(this.form.controls.search.value).subscribe( data => {
      console.warn(data)
      this.weather.data = data;
    })
  }
}
