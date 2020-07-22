import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../shared/project.service';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../shared/project.model';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {
  project: Project;
  
  constructor(private projectService: ProjectService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const slug = this.route.snapshot.params['slug'];
    this.project = this.projectService.getProject(slug);
  }

}
