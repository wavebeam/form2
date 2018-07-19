import { Injectable } from '@angular/core';
import { Person } from './person';
import { PEOPLE } from './people';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})



export class MainService {

  constructor(private messagesService: MessagesService) {

  }

  // Transition from Synchronous to Asynchronous data retrieval
  /* getPeople(): Person[] {
    return PEOPLE;
  }
  */

  getPeople(): Observable<Person[]> {
    this.messagesService.add('MainService: Successfully retrieved Worker Data!');
    // This message comes from messagesService
    return of(PEOPLE);
  }

}
