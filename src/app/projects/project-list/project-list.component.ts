import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../shared/project.service';
import { Project, Acf } from '../shared/project.model';
import { ParamsService } from '../shared/params.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-project-list',
    templateUrl: './project-list.component.html',
    styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit {
    projects = new Array<Project>();
    data: any;
    sliceAmount: number;

    constructor(
        private projectService: ProjectService,
        private paramsService: ParamsService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        // this.data = this.route.data.subscribe((data) => console.log(data));
        // this.data = this.route.snapshot.data['projects'].subscribe((data) => console.log(data));
        this.data = this.route.snapshot.data['projects'];
        console.log(this.data);
        // this.projectService.getAllProjects();
        // this.getPosts();
        this.paramsService.currentMessage.subscribe(
            (sliceAmount) => (this.sliceAmount = sliceAmount)
        );
    }

    // public getPosts() {
    //     this.projectService.getAllProjects().subscribe((response) => {
    //         this.projects = response.map((item) => {
    //             return new Project(
    //                 item.id,
    //                 item.slug,
    //                 item.title,
    //                 item.content,
    //                 item.better_featured_image,
    //                 new Acf(
    //                     item.acf.projectDescription,
    //                     item.acf.projectTypeOfWork,
    //                     item.acf.sliderLinks
    //                 )
    //             );
    //         });
    //     });
    // }
    public getPosts() {
        this.projectService.getAllProjects().subscribe((response) => {
            this.projects = response.map((item) => {
                return new Project(
                    item.id,
                    item.slug,
                    item.title,
                    item.content,
                    item.better_featured_image,
                    new Acf(
                        item.acf.projectDescription,
                        item.acf.projectTypeOfWork,
                        item.acf.sliderLinks
                    )
                );
            });
            console.log(this.projects);
        });
    }
}
