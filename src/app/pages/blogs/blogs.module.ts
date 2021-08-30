import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blogs-routing.module';
import { BlogsComponent } from './blogs.component';
import { BlogItemComponent } from '../../components/blog-item/blog-item.component';

@NgModule({
    declarations: [BlogsComponent, BlogItemComponent],
    imports: [CommonModule, BlogRoutingModule],
})
export class BlogsModule {}
