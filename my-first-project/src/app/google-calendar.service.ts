import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CalendarEvent } from './calendar-event';
import { STUBEVENTS } from './stubevents';

@Injectable({
  providedIn: 'root'
})
export class GoogleCalendarService {
  getEvents(): Observable<CalendarEvent[]> {
    const events = of(STUBEVENTS); // Still just a stub.
    return events;
  }

  getEvent(title:string): Observable<CalendarEvent> {
    // For now, assume that a data with the specified `id` always exists.
    // This is why there is an ! at the end.
    const event = STUBEVENTS.find( event => event.title == title )!;
    return of(event);
  }
  constructor() { }
}
