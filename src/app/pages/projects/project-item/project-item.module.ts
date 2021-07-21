import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ProjectItemRoutingModule } from './project-item-routing.module';
import { ProjectItemComponent } from './project-item.component';
import { FooterModule } from 'src/app/components/footer/footer.module';

@NgModule({
    declarations: [ProjectItemComponent],
    imports: [
        RouterModule,
        CommonModule,
        ProjectItemRoutingModule,
        FooterModule,
    ],
    providers: [],
})
export class ProjectItemModule {}
