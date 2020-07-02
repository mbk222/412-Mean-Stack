import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherSearchComponent } from './weather-search/weather-search.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherSearchFormComponent } from './weather-search/weather-search-form/weather-search-form.component';
import { WeatherSearchDataComponent } from './weather-search/weather-search-data/weather-search-data.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WeatherSearchComponent,
    WeatherSearchFormComponent,
    WeatherSearchDataComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
