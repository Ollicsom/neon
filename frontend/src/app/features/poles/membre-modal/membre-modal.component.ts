import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Membre } from 'src/app/shared/models/membre.model';

@Component({
    selector: 'app-membre-modal',
    templateUrl: './membre-modal.component.html',
    styleUrls: ['./membre-modal.component.scss']
})
export class MembreModalComponent {

    @Input() membre: Membre;

    constructor(
        private activeModal: NgbActiveModal
    ) { }

    dismiss() {
        this.activeModal.dismiss();
    }
}
