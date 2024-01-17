import { Component, OnInit, TemplateRef } from '@angular/core';
import { Pole } from 'src/app/shared/models/pole.model';
import { ApiService } from 'src/app/shared/services/api.service';
import { faChevronRight, faChevronLeft, faTimes } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MembreModalComponent } from '../membre-modal/membre-modal.component';
import { Membre } from 'src/app/shared/models/membre.model';

@Component({
    selector: 'app-poles',
    templateUrl: './poles.component.html',
    styleUrls: ['./poles.component.scss']
})
export class PolesComponent implements OnInit {

    poles: Array<Pole>;
    activeIndex: number;
    faChevronRight = faChevronRight;
    faChevronLeft = faChevronLeft;
    faTimes = faTimes;
    poleView = true;

    constructor(
        private apiService: ApiService,
        private modalService: NgbModal
    ) { }

    ngOnInit(): void {
        this.apiService.getPoles().subscribe(res => {
            console.log(res);
            this.activeIndex = 0;
            this.poles = res;
        });
    }

    setIndex(index) {
        if (index === -1) {
            this.activeIndex = this.poles.length - 1;
        } else if (index === this.poles.length) {
            this.activeIndex = 0;
        } else {
            this.activeIndex = index;
        }
    }

    openMembreModal(membre: Membre) {
        const modal = this.modalService.open(MembreModalComponent, { centered: true });
        modal.componentInstance.membre = membre;
    }

}
