import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeatherAppComponent } from './weather-app.component';

const routes: Routes = [{ path: '', component: WeatherAppComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherAppRoutingModule { }
