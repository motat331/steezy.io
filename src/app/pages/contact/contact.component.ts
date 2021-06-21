import { Component, OnInit } from '@angular/core';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UtilService } from 'src/app/services/util/util.service';

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
    constructor(private http: HttpClient, private util: UtilService) {}

    ngOnInit(): void {
        this.util.setPageTitleAndMeta(
            'Contact Us',
            'Contact Steezapp regarding new business or questions'
        );
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
    }
}
