import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../shared/project.model';
import { ParamsService } from '../shared/params.service';

@Component({
    selector: 'app-project-list',
    templateUrl: './project-list.component.html',
    styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit {
    @Input() projects$: Project;
    sliceAmount = 9;

    constructor(public paramService: ParamsService) {}

    ngOnInit(): void {}
}
