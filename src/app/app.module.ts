import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './elements/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactFormComponent } from './elements/contact-form/contact-form.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectsComponent } from './projects/projects.component';
import { CopyrightComponent } from './elements/copyright/copyright.component';
import { FooterModule } from './elements/footer/footer.module';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ContactFormComponent,
        ProjectListComponent,
        ProjectsComponent,
        CopyrightComponent,
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'steezysite3' }),
        FontAwesomeModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        FooterModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
