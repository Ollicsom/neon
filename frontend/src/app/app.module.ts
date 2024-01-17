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
import { CampagneComponent } from './features/campagne/campagne/campagne.component';
import { DefisComponent } from './features/defi/defis/defis.component';
import { VoyagesComponent } from './features/voyage/voyages/voyages.component';
import { PartenaireComponent } from './features/partenaire/partenaire/partenaire.component';
import { MenuComponent } from './features/container-2/menu/menu.component';
import { ContainerComponent } from './features/container-2/container/container.component';
import { PolesComponent } from './features/poles/poles/poles.component';
import { ApiService } from './shared/services/api.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MembreModalComponent } from './features/poles/membre-modal/membre-modal.component';
import { DefiModalComponent } from './features/defi/defi-modal/defi-modal.component';

const HttpLoaderFactory = (http: HttpClient) => new TranslateHttpLoader(http, '../assets/i18n/', '.json');

const modules = [
    ToasterModule
];

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        PolesComponent,
        CampagneComponent,
        DefisComponent,
        VoyagesComponent,
        PartenaireComponent,
        ContainerComponent,
        MembreModalComponent,
        DefiModalComponent
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
        }),
        FontAwesomeModule
    ],
    providers: [ApiService, HttpClient, ToastService, { provide: LocationStrategy, useClass: HashLocationStrategy }],
    bootstrap: [AppComponent]
})
export class AppModule { }
