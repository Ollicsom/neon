import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.scss']
})
export class ContainerComponent {
    @ViewChildren('page') partenaireComponent: QueryList<ElementRef>;

    constructor(
        private apiService: ApiService
    ) { }

    ScrollTo(index: number) {
        this.partenaireComponent.toArray()[index].nativeElement.scrollIntoView();
    }

}
