import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatAppComponent } from './chat-app.component';

const routes: Routes = [{ path: '', component: ChatAppComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatAppRoutingModule { }
