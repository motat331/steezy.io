import { Component, OnInit, Input } from '@angular/core';
import { ProjectService } from '../shared/project.service';
import { Project } from '../shared/project.model';
import { ParamsService } from '../shared/params.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-project-list',
    templateUrl: './project-list.component.html',
    styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit {
    @Input() projects$: Project;

    constructor() {}

    ngOnInit(): void {}
}
