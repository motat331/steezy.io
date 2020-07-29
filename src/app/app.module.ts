import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './elements/header/header.component';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectItemComponent } from './projects/project-item/project-item.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { SplashscreenComponent } from './pages/home/splashscreen/splashscreen.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GetstartedComponent } from './pages/home/getstarted/getstarted.component';
import { FooterComponent } from './elements/footer/footer.component';
import { ParamsService } from './projects/shared/params.service';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ContactFormComponent } from './elements/contact-form/contact-form.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        PagesComponent,
        HomeComponent,
        ProjectsComponent,
        ProjectItemComponent,
        ProjectListComponent,
        SplashscreenComponent,
        GetstartedComponent,
        FooterComponent,
        ContactFormComponent,
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        FontAwesomeModule,
        AppRoutingModule,
        HttpClientModule,
        SlickCarouselModule,
        FormsModule,
    ],
    providers: [ParamsService],
    bootstrap: [AppComponent],
})
export class AppModule {}
