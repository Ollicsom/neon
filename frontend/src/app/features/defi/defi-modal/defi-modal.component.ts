import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Defi } from 'src/app/shared/models/defi.model';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
    selector: 'app-defi-modal',
    templateUrl: './defi-modal.component.html',
    styleUrls: ['./defi-modal.component.scss']
})
export class DefiModalComponent {
    form: FormGroup;

    constructor(
        private activeModal: NgbActiveModal,
        private apiService: ApiService
    ) {
        this.form = new FormGroup({
            name: new FormControl(null, Validators.required),
            description: new FormControl(null, Validators.required)
        });
    }

    dismiss() {
        this.activeModal.dismiss();
    }

    createDefi() {
        if (this.form.valid) {
            const defi = new Defi();
            defi.description = this.description.value;
            defi.name = this.name.value;
            this.apiService.createDefi(defi).subscribe(res => {
                this.activeModal.close(res);
            });
        } else {
            this.form.markAllAsTouched();
        }
    }

    get name() {
        return this.form.get('name');
    }

    get description() {
        return this.form.get('description');
    }

}
