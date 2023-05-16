import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { incorrectType, weatherForecast } from '../demo-api.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {

  private httpClient = inject(HttpClient);
  private functionalendpoint = `/api/WeatherForecast`;
  public forecast$ = this.httpClient.get<weatherForecast>(this.functionalendpoint);
  public incorrectData$ = this.httpClient.get<incorrectType>(this.functionalendpoint);
  constructor() { }
}
