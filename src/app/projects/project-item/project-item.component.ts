import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../shared/project.service';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../shared/project.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {
  // project: Observable<Project[]>;
  project: Observable<any[]>;

  constructor(private projectService: ProjectService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const slug = this.route.snapshot.params['slug'];
    this.getSingleProject(slug);
  }

  public getSingleProject(slug: string){
    this.projectService.getSingleProject(slug).subscribe((data:  Observable<any>) => {
        this.project = data;
        console.log(data);
    });
  }

}
