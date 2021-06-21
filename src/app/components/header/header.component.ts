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
    isCollapsed: boolean = false;

    constructor() {}

    ngOnInit(): void {}

    ToggleNavBar() {
        let element: HTMLElement = document.getElementsByClassName(
            'navbar-toggler'
        )[0] as HTMLElement;
        if (element.getAttribute('aria-expanded') == 'true') {
            element.click();
        }
    }
}
