import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [FooterComponent],
    exports: [FooterComponent],
    imports: [CommonModule, RouterModule, FontAwesomeModule],
})
export class FooterModule {}
