import { Component, OnInit } from '@angular/core';
import { ProjectService } from './shared/project.service';
import { ParamsService } from './shared/params.service';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-project',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
    sliceAmount: number;
    projects$: any;
    headerStyle = 'sub-page';
    constructor(
        private paramsService: ParamsService,
        private projectService: ProjectService
    ) {}

    ngOnInit(): void {
        this.projects$ = this.projectService.allProjects;

        this.paramsService.currentMessage.subscribe(
            (sliceAmount) => (this.sliceAmount = sliceAmount)
        );
        this.paramsService.changeSliceAmount(10);
    }

    big(self) {}
}
