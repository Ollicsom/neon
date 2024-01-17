import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Defi } from 'src/app/shared/models/defi.model';
import { ApiService } from 'src/app/shared/services/api.service';
import { DefiModalComponent } from '../defi-modal/defi-modal.component';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-defis',
    templateUrl: './defis.component.html',
    styleUrls: ['./defis.component.scss']
})
export class DefisComponent implements OnInit {

    defiList: Array<Defi>;
    endedDefiList: Array<Defi>;
    defiCurrentPage = 0;
    endedDefiCurrentPage = 0;
    defiLength: number;
    endedDefiLength: number;
    currentDefiArray: Array<Defi>;
    currentEndedDefiArray: Array<Defi>;
    pageLength = 10;

    faArrowRight = faArrowRight;
    faArrowLeft = faArrowLeft;
    constructor(
        private apiService: ApiService,
        private modalService: NgbModal
    ) { }


    ngOnInit(): void {
        this.apiService.getDefis().subscribe(res => {
            this.defiList = [...res].filter(x => x.url === null);
            this.defiLength = Math.ceil(this.defiList.length / this.pageLength);
            this.currentDefiArray = [...this.defiList].splice(this.pageLength * this.defiCurrentPage, this.pageLength);

            this.endedDefiList = [...res].filter(x => x.url !== null);
            this.endedDefiLength = Math.ceil(this.endedDefiList.length / this.pageLength);
            this.currentEndedDefiArray = [...this.endedDefiList].splice(this.pageLength * this.endedDefiCurrentPage, this.pageLength);
        });
    }

    changePage(next: boolean, ended: boolean) {
        if (ended) {
            if (next) {
                this.endedDefiCurrentPage++;
            } else {
                this.endedDefiCurrentPage--;
            }
            this.currentEndedDefiArray = [...this.endedDefiList].splice(this.pageLength * this.endedDefiCurrentPage, this.pageLength);
        } else {
            if (next) {
                this.defiCurrentPage++;
            } else {
                this.defiCurrentPage--;
            }
            this.currentDefiArray = [...this.defiList].splice(this.pageLength * this.defiCurrentPage, this.pageLength);
        }

    }

    openDefiModal() {
        this.modalService.open(DefiModalComponent, { centered: true }).result.then(
            (result) => {
                console.log(result);
                this.defiList.push(result);
                this.defiLength = Math.ceil(this.defiList.length / this.pageLength);
                this.defiCurrentPage = this.defiLength - 1;
                this.currentDefiArray = [...this.defiList].splice(this.pageLength * this.defiCurrentPage, this.pageLength);
            }
        );
    }
}
