import { Component, Input } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-detail',
    styleUrls: ['passenger-detail.component.scss'],
    template: `
        <div>
            <span class="status" [class.checked-in]="item.checkedIn"></span>
            {{ item.fullName }}
            <span *ngIf="item.checkedIn">Checked in {{ item.checkedInDate | date: 'yMMMMd' }}</span>
            <div>Children: {{ item.children?.length || 0 }}</div>
        </div>
    `
})
export class PassengerDetailComponent {
    @Input()
    item: Passenger;
    constructor() {}
    
}