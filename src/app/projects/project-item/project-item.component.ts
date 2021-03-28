import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../shared/project.service';
import { ActivatedRoute } from '@angular/router';
import { UtilService } from '../shared/util.service';

@Component({
    selector: 'app-project-item',
    templateUrl: './project-item.component.html',
    styleUrls: ['./project-item.component.scss'],
})
export class ProjectItemComponent implements OnInit {
    project$: any;
    slideConfig = {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        cssEase: 'linear',
    };

    constructor(
        public projectService: ProjectService,
        private route: ActivatedRoute,
        private util: UtilService
    ) {}

    ngOnInit(): void {
        const slug = this.route.snapshot.params['slug'];

        if (this.projectService.allProjects) {
            this.project$ = this.projectService.allProjects.find(
                (project: any) => project.slug == slug
            );
            this.util.setPageTitleAndMeta(
                this.project$.title.rendered,
                'A portfolio page for ' +
                    this.project$.title.rendered +
                    ' which shows how we helped the client with their online presence.'
            );
        } else {
            this.projectService.fetchProjects().subscribe((res) => {
                this.project$ = this.projectService.allProjects.find(
                    (project: any) => project.slug == slug
                );
                this.util.setPageTitleAndMeta(
                    this.project$.title.rendered,
                    'A portfolio page for ' +
                        this.project$.title.rendered +
                        ' which shows how we helped the client with their online presence.'
                );
            });
        }
    }
}
