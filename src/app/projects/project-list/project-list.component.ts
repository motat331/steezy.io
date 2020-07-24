import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../shared/project.service';
import { Project, Acf } from '../shared/project.model';
import { ParamsService } from '../shared/params.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects = new Array<Project>();

  sliceAmount: number;

  constructor(private projectService: ProjectService,
    private paramsService: ParamsService) {

  }

  ngOnInit(): void {
    this.getPosts();
    this.paramsService.currentMessage.subscribe(sliceAmount => this.sliceAmount = sliceAmount);
  }

  public getPosts() {
    this.projectService.getAllProjects().subscribe(response => {
      this.projects = response.map(item => {
        return new Project(
          item.id,
          item.slug,
          item.title,
          item.content,
          item.better_featured_image,
          new Acf(
            item.acf.projectDescription,
            item.acf.projectTypeOfWork,
          ) 
        );
      });
    });
  }

}
