import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivacyPolicyRoutingModule } from './privacy-policy-routing.module';
import { PrivacyPolicyComponent } from './privacy-policy.component';
import { FooterModule } from 'src/app/components/footer/footer.module';

@NgModule({
    declarations: [PrivacyPolicyComponent],
    imports: [CommonModule, PrivacyPolicyRoutingModule, FooterModule],
})
export class PrivacyPolicyModule {}
