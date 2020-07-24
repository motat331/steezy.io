import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../shared/project.service';
import { Project } from '../shared/project.model';
import { Observable } from 'rxjs';
import { ParamsService } from '../shared/params.service';



@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  
  projects: Observable<any[]>;

  sliceAmount: number;

  constructor(private projectService: ProjectService,
    private paramsService: ParamsService) {

  }

  ngOnInit(): void {
    this.getPosts();
    this.paramsService.currentMessage.subscribe(sliceAmount => this.sliceAmount = sliceAmount);
  }

  public getPosts(){
    this.projectService.getAllProjects().subscribe((data:  Observable<any>) => {
        this.projects = data;
        console.log(data);
    });
}

}
