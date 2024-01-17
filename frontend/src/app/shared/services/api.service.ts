import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pole } from '../models/pole.model';
import { Defi } from '../models/defi.model';

@Injectable()
export class ApiService {

    private apiEndpoint = environment.apiEndpoint;

    constructor(
        private http: HttpClient,
    ) { }

    public getPoles(): Observable<Array<Pole>> {
        return this.http.get<Array<Pole>>(
            this.apiEndpoint + `getPoles/`
        );
    }

    public getDefis(): Observable<Array<Defi>> {
        return this.http.get<Array<Defi>>(
            this.apiEndpoint + `getDefis/`
        );
    }

    public createDefi(defi: Defi): Observable<Defi> {
        console.log(defi);
        return this.http.post<Defi>(
            this.apiEndpoint + `createDefi/`, { defi }
        );
    }
}
