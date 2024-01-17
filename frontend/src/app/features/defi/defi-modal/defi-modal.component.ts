import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Defi } from 'src/app/shared/models/defi.model';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
    selector: 'app-defi-modal',
    templateUrl: './defi-modal.component.html',
    styleUrls: ['./defi-modal.component.scss']
})
export class DefiModalComponent {

    constructor(
        private activeModal: NgbActiveModal,
        private apiService: ApiService
    ) { }

    dismiss() {
        this.activeModal.dismiss();
    }

    createDefi() {
        const defi = new Defi();
        defi.description = 'test post';
        defi.name = 'SIPEP33';
        defi.url = 'CACACACACA';
        this.apiService.createDefi(defi).subscribe(res => {
            this.activeModal.close(res);
        });
    }

}
