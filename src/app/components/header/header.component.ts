import { Component, OnInit } from '@angular/core';
import {
    faChevronRight,
    faEnvelopeOpen,
    faSun,
    faMoon,
} from '@fortawesome/free-solid-svg-icons';
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
    darkMode: boolean = false;

    constructor() {
        this.darkModeInit();
    }

    ngOnInit(): void {}

    darkModeInit() {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

        // Listen for changes to the prefers-color-scheme media query
        prefersDark.addListener((mediaQuery) =>
            this.toggleDarkMode(mediaQuery.matches)
        );

        const darkMode = localStorage.getItem('darkmode');

        if (darkMode && darkMode == 'true') {
            this.toggleDarkMode(true);
        } else if (darkMode && darkMode == 'false') {
            this.toggleDarkMode(false);
        } else {
            this.toggleDarkMode(prefersDark.matches);
        }
    }

    toggleDarkMode(shouldAdd) {
        console.log('Should -> ', shouldAdd);
        this.darkMode = shouldAdd;
        localStorage.setItem('darkmode', shouldAdd);
        if (shouldAdd) {
            document.body.classList.toggle('dark', true);
            document.body.classList.toggle('light', false);
        } else {
            document.body.classList.toggle('light', true);
            document.body.classList.toggle('dark', false);
        }
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
