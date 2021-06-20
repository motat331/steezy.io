import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './elements/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GetstartedComponent } from './pages/home/getstarted/getstarted.component';
import { FooterComponent } from './elements/footer/footer.component';
import { ContactFormComponent } from './elements/contact-form/contact-form.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactusComponent } from './pages/contactus/contactus.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        GetstartedComponent,
        FooterComponent,
        ContactFormComponent,
        ProjectListComponent,
        ProjectsComponent,
        ContactusComponent,
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'steezysite3' }),
        FontAwesomeModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
