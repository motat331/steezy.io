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
        public projectService: ProjectService
    ) {}

    ngOnInit(): void {
        if (!this.projectService.allProjects)
            this.projectService.fetchProjects().subscribe();

        this.paramsService.currentMessage.subscribe(
            (sliceAmount) => (this.sliceAmount = sliceAmount)
        );
        this.paramsService.changeSliceAmount(10);
    }
}
