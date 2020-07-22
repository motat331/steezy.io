import { Component, OnInit } from '@angular/core';
import { ProjectService } from './shared/project.service';
import { ParamsService } from './shared/params.service';

@Component({
  selector: 'app-project',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {
  projects: {
    id: number, 
    slug: string, 
    name: string, 
    description: string, 
    bodyText: string, 
    imageUrl: string 
  }[] = [];

  sliceAmount: number;

  constructor(private projectService: ProjectService,
              private paramsService: ParamsService) { }

  ngOnInit(): void {
    this.paramsService.currentMessage.subscribe(sliceAmount => this.sliceAmount = sliceAmount);
    this.paramsService.changeSliceAmount(10)
    this.projects = this.projectService.projects;
  }

}
