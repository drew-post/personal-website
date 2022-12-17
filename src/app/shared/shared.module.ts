import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComingSoonComponent } from '../components/coming-soon/coming-soon.component';
import { TechStackLabelComponent } from '../components/common/tech-stack-label/tech-stack-label.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';

@NgModule({
    imports:      [ CommonModule, RouterModule ],
    declarations: [ FooterComponent, HeaderComponent, ComingSoonComponent, TechStackLabelComponent, ],
    exports:      [ CommonModule, RouterModule, FooterComponent, HeaderComponent, ComingSoonComponent, TechStackLabelComponent, ]
})
export class SharedModule { }