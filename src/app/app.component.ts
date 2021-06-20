import { Component } from '@angular/core';
import {
    Router,
    RouterEvent,
    NavigationStart,
    NavigationEnd,
} from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { CanonicalService } from './projects/shared/canonical.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    isLoaded: boolean;

    constructor(
        private router: Router,
        private metaTagService: Meta,
        private canonicalService: CanonicalService
    ) {}

    ngOnInit() {
        this.routerEvents();

        this.canonicalService.setCanonicalURL();
        this.metaTagService.addTags([
            { name: 'robots', content: 'index, follow' },
            { name: 'author', content: 'Steezapp' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            { charset: 'UTF-8' },
        ]);
    }

    isHomeRoute() {
        if (this.router.url == '/' || this.router.url == '/#contactForm') {
            return true;
        }
        return false;
        // return this.router.url === '/';
    }

    routerEvents() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }

            var pos = window.pageYOffset;
            if (pos > 0) {
                window.scrollTo(0, pos - 20); // how far to scroll on each step
            } else {
            }
        });
    }
}
