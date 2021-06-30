import {
    Component,
    ElementRef,
    OnInit,
    HostListener,
    ViewChild,
} from '@angular/core';
import { UtilService } from 'src/app/services/util/util.service';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-newsletter-popup',
    templateUrl: './newsletter-popup.component.html',
    styleUrls: ['./newsletter-popup.component.scss'],
})
export class NewsletterPopupComponent implements OnInit {
    faLongArrowAltRight = faLongArrowAltRight;

    @ViewChild('popup') popup: ElementRef;
    @HostListener('document:mousedown', ['$event'])
    onGlobalClick(event): void {
        if (!this.popup.nativeElement.contains(event.target)) {
            // clicked outside => close dropdown list
            console.log('clicked outside');
            this.util.newsLetterShow = false;
        }
    }
    constructor(private util: UtilService) {}

    ngOnInit(): void {}
}
