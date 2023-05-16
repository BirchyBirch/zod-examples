import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { z } from 'zod';

export const weatherForecastSchema = z.object({
  date: z.date(),
  temperatureC: z.number().int(),
  temperatureF: z.number().int(),
  summary: z.string().optional(),
});

export type weatherForecast = z.infer<typeof weatherForecastSchema>;
export type incorrectType = {
  name:string;
  age:number;
};


Injectable({
  providedIn: 'root',
});
export class DemoApiService {
  private httpClient = inject(HttpClient);
  private functionalendpoint = `/api/WeatherForecast`;
  public forecast$ = this.httpClient.get<weatherForecast>(this.functionalendpoint);
  public incorrectData$ = this.httpClient.get<incorrectType>(this.functionalendpoint);
}
