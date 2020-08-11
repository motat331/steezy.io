import { Component, OnInit } from '@angular/core';
import { ProjectService } from './shared/project.service';
import { ParamsService } from './shared/params.service';

@Component({
    selector: 'app-project',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
    sliceAmount: number;

    constructor(private paramsService: ParamsService) {}

    ngOnInit(): void {
        this.paramsService.currentMessage.subscribe(
            (sliceAmount) => (this.sliceAmount = sliceAmount)
        );
        this.paramsService.changeSliceAmount(10);
        // this.projects = this.projectService.projects;
    }
}
