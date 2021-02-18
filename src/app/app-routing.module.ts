import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './projects/projects.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'projects',
        component: ProjectsComponent,
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
            useHash: false,
            anchorScrolling: 'enabled',
            preloadingStrategy: PreloadAllModules,
            scrollPositionRestoration: 'enabled',
            initialNavigation: 'enabledBlocking',
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
