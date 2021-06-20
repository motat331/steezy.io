import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './projects/projects.component';

const appRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: HomeComponent,
            },
            {
                path: 'privacy',
                loadChildren: () =>
                    import('./pages/privacy-policy/privacy-policy.module').then(
                        (m) => m.PrivacyPolicyModule
                    ),
            },
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
            {
                path: 'contact',
                loadChildren: () =>
                    import('./pages/contact/contact.module').then(
                        (m) => m.ContactModule
                    ),
            },
            {
                path: 'reviews',
                loadChildren: () =>
                    import('./pages/reviews/reviews.module').then(
                        (m) => m.ReviewsModule
                    ),
            },
            {
                path: 'contactus',
                loadChildren: () =>
                    import('./pages/contactus/contactus.module').then(
                        (m) => m.ContactusModule
                    ),
            },
        ],
    },

    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {
            useHash: false,
            anchorScrolling: 'enabled',
            preloadingStrategy: PreloadAllModules,
            scrollPositionRestoration: 'enabled',
            scrollOffset: [0, 0],
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
