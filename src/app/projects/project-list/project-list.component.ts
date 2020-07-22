import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../shared/project.service';
import { Project } from '../shared/project.model';
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  providers: [ProjectService]
})
export class ProjectListComponent implements OnInit {

  projects: Project [] = [];



  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projects = this.projectService.projects;
  }

}
