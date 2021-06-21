import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { FooterModule } from 'src/app/components/footer/footer.module';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
    declarations: [ContactComponent],
    imports: [
        CommonModule,
        ContactRoutingModule,
        FontAwesomeModule,
        FormsModule,
        FooterModule,
        NgxMaskModule.forRoot(),
    ],
})
export class ContactModule {}
