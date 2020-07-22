import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../shared/project.service';
import { Project } from '../shared/project.model';
import { ParamsService } from '../shared/params.service';


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  providers: [ProjectService]
})
export class ProjectListComponent implements OnInit {

  projects: Project [] = [];

  sliceAmount:number; 

  constructor(private projectService: ProjectService,
              private paramsService: ParamsService) { }

  ngOnInit(): void {
    this.paramsService.currentMessage.subscribe(sliceAmount => this.sliceAmount = sliceAmount);

    this.projects = this.projectService.projects;
  }

}
