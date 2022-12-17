import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AndIOopRoutingModule } from './andioop-routing.module';
import { AndIOopComponent } from './andioop.component';

@NgModule({
    imports: [
        AndIOopRoutingModule,
        SharedModule
    ],
    declarations: [
        AndIOopComponent
    ],
})

export class AndIOopModule { }