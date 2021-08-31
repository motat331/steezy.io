import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import {
    faChevronRight,
    faEnvelopeOpen,
    faSun,
    faMoon,
} from '@fortawesome/free-solid-svg-icons';
import { isPlatformBrowser } from '@angular/common';
import { DarkModeService } from 'src/app/services/dark-mode/dark-mode.service';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    faChevronRight = faChevronRight;
    faEnvelopeOpen = faEnvelopeOpen;
    faSun = faSun;
    faMoon = faMoon;
    isCollapsed: boolean = false;

    constructor(public darkService: DarkModeService) {}

    ngOnInit(): void {}

    toggleDarkMode(shouldAdd) {
        this.darkService.toggleDarkMode(shouldAdd);
    }

    ToggleNavBar() {
        let element: HTMLElement = document.getElementsByClassName(
            'navbar-toggler'
        )[0] as HTMLElement;
        if (element.getAttribute('aria-expanded') == 'true') {
            element.click();
        }
    }
}
