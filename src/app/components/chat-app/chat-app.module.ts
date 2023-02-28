import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChatAppRoutingModule } from './chat-app-routing.module';
import { ChatAppComponent } from './chat-app.component';

@NgModule({
  imports: [
    ChatAppRoutingModule,
    SharedModule
  ],
  declarations: [
    ChatAppComponent
  ],
})

export class ChatAppModule { }
