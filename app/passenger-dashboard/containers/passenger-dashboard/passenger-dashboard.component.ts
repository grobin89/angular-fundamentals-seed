import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';


@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.scss'],
    template: `
        <div>
            <h3>Airline Passengers</h3>
            <passenger-count
                [items]="passengers">
            </passenger-count>
            <passenger-detail
                *ngFor="let passenger of passengers"
                [item]="passenger"></passenger-detail>
            <ul>
                <li *ngFor="let passenger of passengers; let i = index">
                </li>
            </ul>
        </div>
    `
})
export class PassengerDashboardComponent implements OnInit {
    passengers: Passenger[]
    constructor(){} 
    ngOnInit() {
        this.passengers = [
            {
                id: 1,
                fullName: 'Clyde',
                checkedIn: false,
                children : null
            },
            {
                id: 2,
                fullName: 'George',
                checkedIn: false,
                children: null
            },
            {
                id: 3,
                fullName: 'Flynn',
                checkedIn: true,
                checkedInDate: 1409720000000,
                children: [
                    {
                        name: "Flem",
                        age: 3
                    }
                ]
            }
      ]
  }

}