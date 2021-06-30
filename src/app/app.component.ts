import { Component } from '@angular/core';
import {
    Router,
    RouterEvent,
    NavigationStart,
    NavigationEnd,
} from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { CanonicalService } from './services/canonical/canonical.service';
import { UtilService } from './services/util/util.service';

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
        private canonicalService: CanonicalService,
        public util: UtilService
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
        this.router.events.subscribe((event: RouterEvent) => {
            switch (true) {
                case event instanceof NavigationStart: {
                    this.isLoaded = true;
                    break;
                }
                case event instanceof NavigationEnd: {
                    this.isLoaded = false;
                    break;
                }
            }
        });
    }
}
