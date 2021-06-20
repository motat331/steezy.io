import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { IsSecureGuard } from './services/isSecure.guard';

const appRoutes: Routes = [
    {
        path: '',
        canActivate: [IsSecureGuard],
        children: [
            {
                path: '',
                loadChildren: () =>
                    import('./pages/home/home.module').then(
                        (m) => m.HomeModule
                    ),
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
