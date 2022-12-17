import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { PersonalWebsiteRoutingModule } from './personal-website-routing.module';
import { PersonalWebsiteComponent } from './personal-website.component';

@NgModule({
  imports: [
    PersonalWebsiteRoutingModule,
    SharedModule
  ],
  declarations: [
    PersonalWebsiteComponent
  ],
})

export class PersonalWebsiteModule { }