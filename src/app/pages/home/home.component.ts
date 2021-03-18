import { Component, OnInit } from '@angular/core';
import { ParamsService } from '../../projects/shared/params.service';
import { ProjectService } from 'src/app/projects/shared/project.service';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    sliceAmount: number;
    projects$: any;

    constructor(
        private paramsService: ParamsService,
        public projectService: ProjectService
    ) {}

    ngOnInit() {
        if (!this.projectService.allProjects)
            this.projectService.fetchProjects().subscribe();

        this.paramsService.currentMessage.subscribe(
            (sliceAmount) => (this.sliceAmount = sliceAmount)
        );
        this.paramsService.changeSliceAmount(3);
    }
}
