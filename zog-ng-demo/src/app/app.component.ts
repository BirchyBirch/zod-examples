import { Component, inject } from '@angular/core';
import { DemoApiService } from './demo-api.service';
import { WeatherForecastService } from './service/weather-forecast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 public JSON = JSON;
  title = 'zog-ng-demo';
  public svc = inject(WeatherForecastService);
  
}
