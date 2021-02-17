import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ProjectItemRoutingModule } from './project-item-routing.module';
import { ProjectItemComponent } from './project-item.component';

@NgModule({
    declarations: [ProjectItemComponent],
    imports: [RouterModule, CommonModule, ProjectItemRoutingModule],
    providers: [],
})
export class ProjectItemModule {}
