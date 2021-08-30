import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class BlogService {
    blogs: any[] = [];
    constructor(private http: HttpClient) {}

    fetchBlogs() {
        return new Promise((resolve, reject) => {
            this.http
                .get<any[]>(environment.apiBase + '/wp-json/wp/v2/posts')
                .subscribe(
                    (blogs) => {
                        this.blogs = blogs;
                        resolve(true);
                    },
                    (err) => reject(err)
                );
        });
    }
}
