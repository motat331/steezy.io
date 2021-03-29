import { Component, OnInit } from '@angular/core';
import { ProjectService } from './shared/project.service';
import { ParamsService } from './shared/params.service';
import { UtilService } from './shared/util.service';

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
        public projectService: ProjectService,
        private util: UtilService
    ) {}

    ngOnInit(): void {
        if (!this.projectService.allProjects)
            this.projectService.fetchProjects().subscribe();

        this.paramsService.sliceAmount = 9;

        this.util.setPageTitleAndMeta(
            'our projects',
            'A listing page which shows Steezysites past projects'
        );
    }
}
