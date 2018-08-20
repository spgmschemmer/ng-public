import { EventService } from './shared/event.service'
import { Component } from '@angular/core'

declare let toastr

@Component({
    selector: 'events-list',
    template: `
        <div>
            <h1>Upcoming Angular Events</h1>
            <hr />
            <div *ngFor="let event of events" class="col-md-5">
                <events-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"> </events-thumbnail>
            </div>
        </div>
    `
})

export class EventsListComponent {
    events: any[];

    constructor(private eventService: EventService) {}

    ngOnInit() {
        this.events = this.eventService.getEvents();
    }

    handleThumbnailClick(eventName) {
        toastr.success(eventName);
    }
}