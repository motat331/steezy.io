import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util/util.service';

@Component({
    selector: 'app-reviews',
    templateUrl: './reviews.component.html',
    styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent implements OnInit {
    constructor(private util: UtilService) {}

    ngOnInit(): void {
        this.util.setPageTitleAndMeta(
            'Reviews',
            'Read client testimonials and reviews of what Steezapp did for their business.'
        );
    }
}
