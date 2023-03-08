import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComingSoonComponent } from '../components/coming-soon/coming-soon.component';
import { NavButtonHeaderComponent } from '../components/common/nav-button-header/nav-button-header/nav-button-header.component';
import { ProjectLabelComponent } from '../components/common/project-label/project-label.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
    imports:      [ CommonModule, RouterModule,
      CarouselModule.forRoot() ],
    declarations: [ FooterComponent, HeaderComponent, ComingSoonComponent, ProjectLabelComponent, NavButtonHeaderComponent ],
    exports:      [ CommonModule, RouterModule,
      CarouselModule, FooterComponent, HeaderComponent, ComingSoonComponent, ProjectLabelComponent, NavButtonHeaderComponent ]
})
export class SharedModule { }
