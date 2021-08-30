import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog/blog.service';

@Component({
    selector: 'app-blog',
    templateUrl: './blogs.component.html',
    styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit {
    constructor(public blogService: BlogService) {}

    async ngOnInit() {
        try {
            if (this.blogService.blogs.length == 0) {
                await this.blogService.fetchBlogs();
                console.log('Blogs -> ', this.blogService.blogs);
            }
        } finally {
        }
    }
}
