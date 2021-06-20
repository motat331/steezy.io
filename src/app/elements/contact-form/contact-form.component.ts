import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
    @ViewChild('f') contactForm: NgForm;
    name: string;
    email: string;
    phone: string;
    showSuccessMessage: boolean = false;

    constructor(private http: HttpClient) {}

    ngOnInit(): void {}

    processForm() {
        const url =
            'https://admin.steezy.io/wp-json/contact-form-7/v1/contact-forms/22/feedback';
        const formData = new FormData();
        formData.append('yourName', this.contactForm.form.value.yourName);
        formData.append('yourEmail', this.contactForm.form.value.yourEmail);

        this.http.post(url, formData).subscribe((responseData) => {
            this.showSuccessMessage = true;
            console.log(responseData);
        });
    }
}
