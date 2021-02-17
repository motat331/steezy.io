import { Component } from '@angular/core';
import {
    Router,
    RouterEvent,
    NavigationStart,
    NavigationEnd,
} from '@angular/router';
import { filter, first } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'steezysite2';
    headerStyle;
    isLoaded: boolean;

    constructor(private router: Router) {}

    ngOnInit() {
        this.routerEvents();
        setTimeout(function () {
            console.log('set');
            this.headerStyle = 'abstract-background';
        }, 3000);
        // this.router.events
        //     .pipe(
        //         filter((event) => event instanceof NavigationEnd),
        //         first()
        //     )
        //     .subscribe(() => {
        //         document.getElementById('loader').classList.add('hidden');
        //     });
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
