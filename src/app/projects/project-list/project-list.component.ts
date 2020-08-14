import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ProjectService } from '../shared/project.service';
import { Project, Acf } from '../shared/project.model';
import { ParamsService } from '../shared/params.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
    selector: 'app-project-list',
    templateUrl: './project-list.component.html',
    styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit, AfterViewInit {
    projects: Observable<Project[]>;
    data: any;
    sliceAmount: number;

    constructor(
        private projectService: ProjectService,
        private paramsService: ParamsService,
        private route: ActivatedRoute
    ) {
        // this.projects = this.projectService.allProjects;
    }

    ngOnInit(): void {
        this.projects = this.projectService.allProjects;
        console.log(this.projects);
        this.paramsService.currentMessage.subscribe(
            (sliceAmount) => (this.sliceAmount = sliceAmount)
        );
    }

    ngAfterViewInit() {}
}
