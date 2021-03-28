import { Component, OnInit } from '@angular/core';
import { ParamsService } from '../../projects/shared/params.service';
import { ProjectService } from 'src/app/projects/shared/project.service';
import { map } from 'rxjs/operators';
import { Title, Meta } from '@angular/platform-browser';

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
        private metaTagService: Meta,
        private titleService: Title
    ) {}

    ngOnInit() {
        if (!this.projectService.allProjects)
            this.projectService.fetchProjects().subscribe();

        this.paramsService.currentMessage.subscribe(
            (sliceAmount) => (this.sliceAmount = sliceAmount)
        );
        this.paramsService.changeSliceAmount(3);

        this.titleService.setTitle('Title');
        this.metaTagService.updateTag({
            name: 'description',
            content: 'Add song template',
        });
    }
}
