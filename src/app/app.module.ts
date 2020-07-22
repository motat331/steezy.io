import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [
    ParamsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
