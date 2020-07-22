import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectItemComponent } from './projects/project-item/project-item.component';
import { ProjectsComponent } from './projects/projects.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'projects', component: ProjectsComponent, children: [
      { path: '', component: ProjectListComponent },
      { path: ':slug', component: ProjectItemComponent },
    ] }
];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'})],
    exports: [RouterModule]
})

export class AppRoutingModule {
  
}