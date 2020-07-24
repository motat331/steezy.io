import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './project.model';

@Injectable({
    providedIn: 'root'
})
export class ProjectService {
    projectsScope = '5';
    projects = [];
    
    constructor(private http: HttpClient) { }

    getAllProjects(): Observable<Project[]> {
        return  this.http.get<any>('https://admin.steezy.io/wp-json/wp/v2/posts?categories=5');
    }

    getSingleProject(slug: string): Observable<Project[]> {
        return  this.http.get<any>('https://admin.steezy.io/wp-json/wp/v2/posts?slug=' + slug);
    }
}