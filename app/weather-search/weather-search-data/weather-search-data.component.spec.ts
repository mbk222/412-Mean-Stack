import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherSearchDataComponent } from './weather-search-data.component';

describe('WeatherSearchDataComponent', () => {
  let component: WeatherSearchDataComponent;
  let fixture: ComponentFixture<WeatherSearchDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherSearchDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherSearchDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
