import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ProjectService } from '../shared/project.service';
import { ActivatedRoute } from '@angular/router';
import { Project, Acf } from '../shared/project.model';
import { Title } from '@angular/platform-browser';
import { find, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-project-item',
    templateUrl: './project-item.component.html',
    styleUrls: ['./project-item.component.scss'],
})
export class ProjectItemComponent implements OnInit, AfterViewInit {
    // project = new Array<Project>();
    project: any;
    project$: any;
    cache$: any;

    constructor(
        private projectService: ProjectService,
        private route: ActivatedRoute,
        private title: Title
    ) {}

    ngOnInit(): void {
        const slug = this.route.snapshot.params['slug'];

        if (this.cache$) {
            this.project$ = this.projectService.cache$.pipe(
                map((projects) =>
                    projects.find((project) => project.slug == slug)
                )
            );
        } else {
            this.project$ = this.projectService.allProjects.pipe(
                map((projects) =>
                    projects.find((project) => project.slug == slug)
                )
            );
        }
        return this.project$;
    }

    ngAfterViewInit() {}

    slideConfig = {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        cssEase: 'linear',
    };

    public getSingleProject(slug: string) {
        this.projectService.getSingleProject(slug).subscribe((response) => {
            this.project = response.map((item) => {
                return new Project(
                    item.id,
                    item.slug,
                    item.title,
                    item.content,
                    item.better_featured_image,
                    new Acf(
                        item.acf.projectDescription,
                        item.acf.projectTypeOfWork,
                        item.acf.sliderLinks.split(','),
                        item.acf.featured
                    )
                );
            });
            this.title.setTitle(this.project[0].title.rendered);
            console.log(this.project);
        });
    }
}
