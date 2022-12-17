import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProjectsRoutingModule } from './project-routing.module';
import { ProjectsComponent } from './projects.component';

@NgModule({
  imports: [
    ProjectsRoutingModule,
    SharedModule
  ],
  declarations: [
    ProjectsComponent
  ],
})

export class ProjectsModule { }