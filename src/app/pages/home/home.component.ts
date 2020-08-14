import { Component, OnInit } from '@angular/core';
import { ParamsService } from '../../projects/shared/params.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    sliceAmount: number;

    constructor(private data: ParamsService) {}

    ngOnInit() {
        this.data.currentMessage.subscribe(
            (sliceAmount) => (this.sliceAmount = sliceAmount)
        );
        this.data.changeSliceAmount(3);
    }
}
