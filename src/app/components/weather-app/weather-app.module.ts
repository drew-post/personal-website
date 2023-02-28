import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { WeatherAppRoutingModule } from './weather-app-routing.module';
import { WeatherAppComponent } from './weather-app.component';

@NgModule({
  imports: [
    WeatherAppRoutingModule,
    SharedModule
  ],
  declarations: [
    WeatherAppComponent
  ],
})

export class WeatherAppModule { }
