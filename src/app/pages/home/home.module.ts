import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FooterModule } from '../../elements/footer/footer.module';
import { HomeComponent } from './home.component';

@NgModule({
    declarations: [HomeComponent],
    imports: [CommonModule, HomeRoutingModule, FooterModule],
})
export class HomeModule {}
