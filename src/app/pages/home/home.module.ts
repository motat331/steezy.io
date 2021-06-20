import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FooterModule } from '../../elements/footer/footer.module';

@NgModule({
    declarations: [],
    imports: [CommonModule, HomeRoutingModule, FooterModule],
})
export class HomeModule {}
