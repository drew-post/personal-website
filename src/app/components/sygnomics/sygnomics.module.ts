import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { SygnomicsRoutingModule } from './sygnomics-routing.module';
import { SygnomicsComponent } from './sygnomics.component';

@NgModule({
  imports: [
    SygnomicsRoutingModule,
    SharedModule
  ],
  declarations: [
    SygnomicsComponent
  ],
})

export class SygnomicsModule { }