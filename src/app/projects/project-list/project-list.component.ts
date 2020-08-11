import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../shared/project.service';
import { Project, Acf } from '../shared/project.model';
import { ParamsService } from '../shared/params.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-project-list',
    templateUrl: './project-list.component.html',
    styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit {
    // projects = new Array<Project>();
    projects: Observable<Project[]>;
    data: any;
    sliceAmount: number;

    constructor(
        private projectService: ProjectService,
        private paramsService: ParamsService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.projects = this.projectService.allProjects;
        console.log(this.projectService.allProjects[0]);
        this.paramsService.currentMessage.subscribe(
            (sliceAmount) => (this.sliceAmount = sliceAmount)
        );
    }
}
