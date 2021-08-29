import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/projects/project.service';
import { UtilService } from '../../services/util/util.service';

@Component({
    selector: 'app-project',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
    projects$: any;
    constructor(
        public projectService: ProjectService,
        private util: UtilService
    ) {}

    ngOnInit(): void {
        if (!this.projectService.allProjects)
            this.projectService.fetchProjects().subscribe(() => {});

        console.log('projects -> ', this.projectService.allProjects);

        this.util.setPageTitleAndMeta(
            'Our Projects',
            'A listing page which shows Steezapps past projects'
        );
    }
}
