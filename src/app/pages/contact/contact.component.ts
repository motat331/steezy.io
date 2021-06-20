import { Component, OnInit } from '@angular/core';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
    faLongArrowAltRight = faLongArrowAltRight;
    fileToUpload: File;
    showSuccessMessage: boolean = false;
    showErrorMessage: boolean = false;
    constructor(private http: HttpClient) {}

    ngOnInit(): void {}

    ngAfterViewInit() {
        console.log('Init');
        window.scrollTo(0, 0);
        let top = document.getElementById('main-header');
        if (top !== null) {
            console.log('scroll into view');
            top.scrollIntoView();
            top = null;
        }
    }

    onSubmit(form: NgForm) {
        let formValues = form.form.value;
        const url =
            'https://admin.steezy.io/wp-json/contact-form-7/v1/contact-forms/22/feedback';
        const formData = new FormData();
        formData.append('firstName', formValues.firstName);
        formData.append('lastName', formValues.lastName);
        formData.append('email', formValues.email);
        formData.append('phoneNumber', formValues.phoneNumber);
        formData.append('description', formValues.description);
        formData.append('selectFile', this.fileToUpload);

        console.log('FormData -> ', formData);
        this.http.post(url, formData).subscribe((res: any) => {
            if (res.status == 'mail_sent') {
                this.showSuccessMessage = true;
                form.reset();
            } else {
                this.showErrorMessage = true;
            }
            console.log(res);
        });
    }

    pickImage(files: FileList) {
        let file = files[0];
        console.log('files.item -> ', file);
        if (file.size > 26214400) {
            console.log('file is bigger than 25 mb');
        } else {
            this.fileToUpload = file;
        }
        // if (event.target.files && event.target.files.length) {
        //     let file = event.target.files[0];
        // }
    }

    // checkFileSize(image) {
    //     return new Promise((resolve, reject) => {
    //         const reader = new FileReader();
    //         reader.readAsDataURL(image);
    //         reader.onload = () => {
    //             const file = new File();
    //         };
    //     });
    // }
}
