import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
    providedIn: 'root',
})
export class UtilService {
    newsLetterShow: boolean = true;
    constructor(private metaTagService: Meta, private titleService: Title) {}

    setPageTitleAndMeta(title: string, description: string) {
        this.titleService.setTitle('Steezapp - ' + title);
        this.metaTagService.updateTag({
            name: 'description',
            content: description,
        });
    }
}
