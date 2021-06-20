import { Component, OnInit } from '@angular/core';
import {
    faChevronRight,
    faEnvelopeOpen,
} from '@fortawesome/free-solid-svg-icons';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    faChevronRight = faChevronRight;
    faEnvelopeOpen = faEnvelopeOpen;

    constructor() {}

    ngOnInit(): void {}

    scrollToElement($element): void {
        console.log($element);
        $element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
        });
    }
}
