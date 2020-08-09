import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'projects',
        component: ProjectsComponent,
        children: [{ path: '', component: ProjectListComponent }],
    },
    {
        path: 'projects/:slug',
        loadChildren: () =>
            import('./projects/project-item/project-item.module').then(
                (m) => m.ProjectItemModule
            ),
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {
            preloadingStrategy: PreloadAllModules,
            scrollPositionRestoration: 'disabled',
            initialNavigation: 'enabled',
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
