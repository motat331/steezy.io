import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { FooterModule } from '../../components/footer/footer.module';

@NgModule({
    declarations: [ProjectsComponent],
    imports: [CommonModule, ProjectsRoutingModule, FooterModule],
})
export class ProjectsModule {}
