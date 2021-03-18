import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../shared/project.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-project-item',
    templateUrl: './project-item.component.html',
    styleUrls: ['./project-item.component.scss'],
})
export class ProjectItemComponent implements OnInit {
    project: any;
    project$: any;
    cache$: any;

    constructor(
        public projectService: ProjectService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        const slug = this.route.snapshot.params['slug'];

        if (this.projectService.allProjects) {
            this.project$ = this.projectService.allProjects.find(
                (project: any) => project.slug == slug
            );
        } else {
            this.projectService.fetchProjects().subscribe((res) => {
                this.project$ = this.projectService.allProjects.find(
                    (project: any) => project.slug == slug
                );
                console.log('All Projects Res -> ', this.project$);
            });
        }
    }

    slideConfig = {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        cssEase: 'linear',
    };
}
