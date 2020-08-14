import { Component } from '@angular/core';
import {
    Router,
    RouterEvent,
    NavigationStart,
    NavigationEnd,
} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'steezysite2';
    isLoaded: boolean;

    constructor(private _router: Router) {}

    ngOnInit() {
        this.routerEvents();
    }

    routerEvents() {
        this._router.events.subscribe((event: RouterEvent) => {
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
