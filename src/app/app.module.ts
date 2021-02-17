import { NgModule, APP_INITIALIZER, PLATFORM_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './elements/header/header.component';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './pages/home/home.component';
import { SplashscreenComponent } from './pages/home/splashscreen/splashscreen.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GetstartedComponent } from './pages/home/getstarted/getstarted.component';
import { FooterComponent } from './elements/footer/footer.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ContactFormComponent } from './elements/contact-form/contact-form.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectsComponent } from './projects/projects.component';
import { PrebootModule } from 'preboot';
import { isPlatformBrowser, ɵgetDOM, DOCUMENT } from '@angular/common';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        PagesComponent,
        HomeComponent,
        GetstartedComponent,
        FooterComponent,
        ContactFormComponent,
        SplashscreenComponent,
        ProjectListComponent,
        ProjectsComponent,
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        PrebootModule.withConfig({ appRoot: 'app-root' }),
        FontAwesomeModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        SlickCarouselModule,
    ],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: function (
                document: HTMLDocument,
                platformId: Object
            ): Function {
                return () => {
                    if (isPlatformBrowser(platformId)) {
                        const dom = ɵgetDOM();
                        const styles: any[] = Array.prototype.slice.apply(
                            dom
                                .getDefaultDocument()
                                .querySelectorAll(`style[ng-transition]`)
                        );
                        styles.forEach((el) => {
                            // Remove ng-transition attribute to prevent Angular appInitializerFactory
                            // to remove server styles before preboot complete
                            el.removeAttribute('ng-transition');
                        });
                        document.addEventListener('PrebootComplete', () => {
                            // After preboot complete, remove the server scripts
                            setTimeout(() =>
                                styles.forEach((el) => dom.remove(el))
                            );
                        });
                    }
                };
            },
            deps: [DOCUMENT, PLATFORM_ID],
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
