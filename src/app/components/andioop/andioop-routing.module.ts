import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AndIOopComponent } from './andioop.component';

const routes: Routes = [{ path: '', component: AndIOopComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AndIOopRoutingModule { }