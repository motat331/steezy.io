import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { FooterModule } from './components/footer/footer.module';
import { IsSecureGuard } from './services/guards/isSecure.guard';
import { NewsletterPopupComponent } from './components/newsletter-popup/newsletter-popup.component';
import { GoogleAnalyticsGtagComponent } from './components/google-analytics-gtag/google-analytics-gtag.component';
import { DarkModeService } from './services/dark-mode/dark-mode.service';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        CopyrightComponent,
        NewsletterPopupComponent,
        GoogleAnalyticsGtagComponent,
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'steezysite3' }),
        FontAwesomeModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        FooterModule,
        HttpClientJsonpModule,
    ],
    providers: [
        IsSecureGuard,
        {
            provide: APP_INITIALIZER,
            useFactory: initializeApp,
            deps: [DarkModeService],
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
export function initializeApp(provider: DarkModeService) {
    return () => provider.load();
}
