import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { BakesaleAppRoutingModule } from './bakesale-app-routing.module';
import { BakesaleAppComponent } from './bakesale-app.component';

@NgModule({
  imports: [
    BakesaleAppRoutingModule,
    SharedModule
  ],
  declarations: [
    BakesaleAppComponent
  ],
})

export class BakesaleAppModule { }