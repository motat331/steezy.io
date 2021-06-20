import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
    faLongArrowAltRight = faLongArrowAltRight;
    constructor(public router: Router) {}

    ngOnInit(): void {}

    showContactUs() {
        return this.router.url.includes('projects');
    }

    navigateTo(url) {
        this.router.navigate([url]);
    }
}
