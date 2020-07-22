import { Component, OnInit } from '@angular/core';
import { ProjectService } from './shared/project.service';

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

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projects = this.projectService.projects;
  }

}
