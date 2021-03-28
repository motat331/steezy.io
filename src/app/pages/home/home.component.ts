import { Component, OnInit } from '@angular/core';
import { ParamsService } from '../../projects/shared/params.service';
import { ProjectService } from 'src/app/projects/shared/project.service';
import { UtilService } from 'src/app/projects/shared/util.service';

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
        public projectService: ProjectService,
        private util: UtilService
    ) {}

    ngOnInit() {
        if (!this.projectService.allProjects)
            this.projectService.fetchProjects().subscribe();

        this.paramsService.currentMessage.subscribe(
            (sliceAmount) => (this.sliceAmount = sliceAmount)
        );
        this.paramsService.changeSliceAmount(3);
        this.util.setPageTitleAndMeta(
            'A web agency for people and brands',
            'Home page of Steezysite - a online presence agency helping people and brands develop and build out their websites and web applications.'
        );
    }
}
