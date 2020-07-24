import { OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProjectService {
    projectsScope = '5';

    projects = [];

    constructor(private http: HttpClient) { }
    // return this.http.get<any[]>('https://admin.steezy.io/wp-json/wp/v2/posts?categories=5', {

    getAllProjects(): Observable<any> {
        return  this.http.get<any>('https://admin.steezy.io/wp-json/wp/v2/posts?_embed&categories=5');

        // return this.http.get<any[]>('https://admin.steezy.io/wp-json/wp/v2/posts?_embed', {
        //     params: {
        //         per_page: '6'
        //     }
        // });
    }




    getProject(slug: string) {
        const project = this.projects.find(
            (p) => {
                return p.slug === slug;
            }
        );
        return project;
    }
}