import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

    @Output() clickMenu = new EventEmitter<number>();

    constructor() { }

    ScrollTo(elementIndex: number) {
        this.clickMenu.emit(elementIndex);
    }

}
