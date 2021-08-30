import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../../services/blog/blog.service';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
    blog;
    constructor(
        private route: ActivatedRoute,
        private blogService: BlogService
    ) {}

    async ngOnInit() {
        const slug = this.route.snapshot.params['slug'];
        try {
            if (this.blogService.blogs.length == 0) {
                console.log('if -> ');
                await this.blogService.fetchBlogs();
            }
        } catch {
        } finally {
            this.findBlog(slug);
        }
    }

    findBlog(slug) {
        this.blog = this.blogService.blogs.find((blog) => blog.slug == slug);

        console.log('Blog -> ', this.blog);
    }
}
