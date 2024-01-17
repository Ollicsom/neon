import { Component } from '@angular/core';

@Component({
    selector: 'app-voyages',
    templateUrl: './voyages.component.html',
    styleUrls: ['./voyages.component.scss']
})
export class VoyagesComponent {

    constructor() { }


    open(type: string) {
        console.log(type);
    }

}
