import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util/util.service';

@Component({
    selector: 'app-privacy-policy',
    templateUrl: './privacy-policy.component.html',
    styleUrls: ['./privacy-policy.component.scss'],
})
export class PrivacyPolicyComponent implements OnInit {
    constructor(private util: UtilService) {}

    ngOnInit(): void {
        this.util.setPageTitleAndMeta(
            'Privacy Policy',
            'The Steezapp privacy policy.'
        );
    }
}
