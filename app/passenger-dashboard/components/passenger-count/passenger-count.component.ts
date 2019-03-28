import { Component, Input } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-count',
    template: `
        <div>
            Total checked in: {{ checkedInCount() || 0 }} / {{ items?.length || 0 }}
        </div>
    `
})
export class PassengerCountComponent {
    @Input()
    items: Passenger[];
    constructor() {}
    checkedInCount() {
        if (!this.items) return;
        return this.items.filter((passenger: Passenger) => {
            return passenger.checkedIn;
        }).length;
    }
}