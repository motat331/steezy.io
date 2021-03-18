import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Project } from './project.model';

@Injectable({
    providedIn: 'root',
})
export class ProjectService {
    projectsScope = '5';
    projects = [];
    allProjects;

    constructor(private http: HttpClient) {}

    getAllProjects(): Observable<Project[]> {
        return this.http.get<any>(
            'https://admin.steezy.io/wp-json/wp/v2/posts?categories=5'
        );
    }

    fetchProjects() {
        return this.http
            .get<any[]>(
                'https://admin.steezy.io/wp-json/wp/v2/posts?categories=5'
            )
            .pipe(
                map((projects: any) => {
                    const newProjects = projects.map((item: any) => {
                        let project: Project;
                        project = {
                            id: item.id,
                            slug: item.slug,
                            title: item.title,
                            content: item.content,
                            better_featured_image: item.better_featured_image,
                            projectDescription: item.acf.projectDescription,
                            projectTypeOfWork: item.acf.projectTypeOfWork,
                            sliderLinks: item.acf.sliderLinks,
                            featured: item.acf.featured,
                            col_1_title: item.acf.col_1_title,
                            col_1_text: item.acf.col_1_text,
                            col_1_image: item.acf.col_1_image,
                            col_2_title: item.acf.col_2_title,
                            col_2_text: item.acf.col_2_text,
                            col_2_image: item.acf.col_2_image,
                            col_3_title: item.acf.col_3_title,
                            col_3_text: item.acf.col_3_text,
                            col_3_image: item.acf.col_3_image,
                        };

                        return project;
                    });
                    this.allProjects = newProjects;
                    return this.allProjects;
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
