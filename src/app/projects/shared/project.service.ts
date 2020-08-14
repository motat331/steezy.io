import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map, shareReplay, tap, filter, first } from 'rxjs/operators';
import { Project, Acf } from './project.model';

@Injectable({
    providedIn: 'root',
})
export class ProjectService {
    projectsScope = '5';
    projects = [];
    cache$: Observable<Project[]>;

    constructor(private http: HttpClient) {}

    getAllProjects(): Observable<Project[]> {
        return this.http.get<any>(
            'https://admin.steezy.io/wp-json/wp/v2/posts?categories=5'
        );
    }

    get singleProject() {
        if (!this.cache$) {
            this.cache$ = this.fetchProjects().pipe(shareReplay(1));
        }
        return this.cache$;
    }

    get allProjects() {
        if (!this.cache$) {
            this.cache$ = this.fetchProjects().pipe(shareReplay(1));
        }
        return this.cache$;
    }

    fetchProjects() {
        return this.http
            .get<Project[]>(
                'https://admin.steezy.io/wp-json/wp/v2/posts?categories=5'
            )
            .pipe(
                map((projects) => {
                    return projects.map((item) => {
                        return new Project(
                            item.id,
                            item.slug,
                            item.title,
                            item.content,
                            item.better_featured_image,
                            new Acf(
                                item.acf.projectDescription,
                                item.acf.projectTypeOfWork,
                                item.acf.sliderLinks
                            )
                        );
                    });
                })
            );
    }

    setProjects(projects: Project[]) {
        this.projects = projects;
    }

    getSingleProject(slug: string): Observable<Project[]> {
        return this.http.get<any>(
            'https://admin.steezy.io/wp-json/wp/v2/posts?slug=' + slug
        );
    }
}
