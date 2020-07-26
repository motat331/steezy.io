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

    slides = [
        { img: '/assets/images/Perspective_ChaseFiedler.png' },
        { img: '/assets/images/Perspective_InfiniteILA.png' },
    ];

    slideConfig = {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        cssEase: 'linear',
    };

    constructor() {}

    ngOnInit(): void {}
}
