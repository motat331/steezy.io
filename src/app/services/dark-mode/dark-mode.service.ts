import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root',
})
export class DarkModeService {
    darkMode: boolean = false;
    pageLoaded: boolean = false;

    constructor(@Inject(PLATFORM_ID) private platformId: any) {}

    load() {
        return new Promise((resolve, reject) => {
            try {
                this.darkModeInit();
            } finally {
                resolve(true);
            }
        });
    }

    darkModeInit() {
        if (isPlatformBrowser(this.platformId)) {
            const prefersDark = window.matchMedia(
                '(prefers-color-scheme: dark)'
            );
            // Listen for changes to the prefers-color-scheme media query
            prefersDark.addListener((mediaQuery) =>
                this.toggleDarkMode(mediaQuery.matches)
            );
            const darkMode = localStorage.getItem('darkmode');
            if (darkMode && darkMode == 'true') {
                this.toggleDarkMode(true);
            } else if (darkMode && darkMode == 'false') {
                this.toggleDarkMode(false);
            }
        }
    }

    toggleDarkMode(shouldAdd) {
        if (isPlatformBrowser(this.platformId)) {
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
    }
}
