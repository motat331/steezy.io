import { Component, OnInit } from '@angular/core';
import {
    faCheck,
    faCheckCircle,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-splashscreen',
    templateUrl: './splashscreen.component.html',
    styleUrls: ['./splashscreen.component.scss'],
})
export class SplashscreenComponent implements OnInit {
    faCheck = faCheck;
    faChevronRight = faChevronRight;
    faCheckCircle = faCheckCircle;
    headerStyle = 'abstract-background';

    constructor() {}

    ngOnInit(): void {}
}
