import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from './shared/components/toaster/services/toast.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ToasterModule } from './shared/components/toaster/toaster.module';

const HttpLoaderFactory = (http: HttpClient) => new TranslateHttpLoader(http, '../assets/i18n/', '.json');

const modules = [
    ToasterModule
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        modules,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgbModule,
        TranslateModule.forRoot({
            defaultLanguage: 'fr-FR',
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    providers: [HttpClient, ToastService, {provide: LocationStrategy, useClass: HashLocationStrategy} ],
    bootstrap: [AppComponent]
})
export class AppModule { }
