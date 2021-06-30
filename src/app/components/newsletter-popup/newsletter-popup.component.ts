import {
    Component,
    ElementRef,
    OnInit,
    HostListener,
    ViewChild,
} from '@angular/core';
import { UtilService } from 'src/app/services/util/util.service';
import {
    faLongArrowAltRight,
    faTimes,
    faNewspaper,
} from '@fortawesome/free-solid-svg-icons';
import { HttpClient, HttpParams } from '@angular/common/http';

interface MailChimpResponse {
    result: string;
    msg: string;
}
@Component({
    selector: 'app-newsletter-popup',
    templateUrl: './newsletter-popup.component.html',
    styleUrls: ['./newsletter-popup.component.scss'],
})
export class NewsletterPopupComponent implements OnInit {
    faLongArrowAltRight = faLongArrowAltRight;
    faTimes = faTimes;
    faNewspaper = faNewspaper;
    signUpSuccess: boolean = false;
    formSpinner: boolean = false;
    emailExists: boolean = false;
    message = {
        EMAIL: '',
        FNAME: '',
        LNAME: '',
    };

    @ViewChild('popup') popup: ElementRef;
    @HostListener('document:mousedown', ['$event'])
    onGlobalClick(event): void {
        if (!this.popup.nativeElement.contains(event.target)) {
            // clicked outside => close dropdown list
            console.log('clicked outside');
            this.util.newsLetterShow = false;
        }
    }
    constructor(private util: UtilService, private http: HttpClient) {}

    ngOnInit(): void {}

    closeButton() {
        this.util.newsLetterShow = false;
    }

    onSubmit() {
        this.formSpinner = true;
        const url =
            'https://steezapp.us6.list-manage.com/subscribe/post-json?u=3303b5925032574875fd2c0b0&id=e3bd62d6f7&';
        const params = new HttpParams()
            .set('EMAIL', this.message.EMAIL)
            .set('FNAME', this.message.FNAME)
            .set('LNAME', this.message.LNAME)
            .set('submit', 'Subscribe') // hidden input name
            .set('b_3303b5925032574875fd2c0b0_e3bd62d6f7', ''); // hidden input name

        const mailChimpUrl = url + params.toString();

        // 'c' refers to the jsonp callback param key. This is specific to Mailchimp
        this.http.jsonp<MailChimpResponse>(mailChimpUrl, 'c').subscribe(
            (response) => {
                console.log('response -> ', response);

                this.signUpSuccess = true;
                this.formSpinner = false;
            },
            (error) => {
                console.log('Error -> ', error);
                this.formSpinner = false;
            }
        );
    }
}
