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
        private projectService: ProjectService
    ) {}

    ngOnInit() {
        this.projects$ = this.projectService.allProjects.pipe(
            map((projects) =>
                projects.filter((project) => project.acf.featured == true)
            )
        );

        this.paramsService.currentMessage.subscribe(
            (sliceAmount) => (this.sliceAmount = sliceAmount)
        );
        this.paramsService.changeSliceAmount(3);
    }
}
