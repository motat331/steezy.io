import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../shared/project.service';
import { ActivatedRoute } from '@angular/router';
import { Project, Acf } from '../shared/project.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {
  project = new Array<Project>();

  constructor(private projectService: ProjectService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const slug = this.route.snapshot.params['slug'];
    this.getSingleProject(slug);
  }

  public getSingleProject(slug: string) {
    this.projectService.getSingleProject(slug).subscribe(response => {
      this.project = response.map(item => {
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
      // console.log(this.project);
    });
  }
}
