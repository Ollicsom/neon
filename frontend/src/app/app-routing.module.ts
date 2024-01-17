import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { PolesComponent } from './features/poles/poles/poles.component';
// import { CampagneComponent } from './features/campagne/campagne/campagne.component';
// import { DefisComponent } from './features/defi/defis/defis.component';
// import { VoyagesComponent } from './features/voyage/voyages/voyages.component';
// import { PartenaireComponent } from './features/partenaire/partenaire/partenaire.component';

const routes: Routes = [
    // { path: '', redirectTo: '/poles', pathMatch: 'full' },
    // { path: 'poles', component: PolesComponent },
    // { path: 'campagne', component: CampagneComponent },
    // { path: 'voyages', component: VoyagesComponent },
    // { path: 'defis', component: DefisComponent },
    // { path: 'partenaires', component: PartenaireComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
