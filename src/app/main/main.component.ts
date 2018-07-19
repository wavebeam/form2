import { Component, OnInit } from '@angular/core';
import { Person } from '../person';

// Replaced PEOPLE component Object with MainService
// import { PEOPLE } from '../people';
import { MainService } from '../main.service';
import { fromEventPattern } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  constructor(private mainService: MainService) {


   }

  // Replaced people = PEOPLE component speaker with regular Person array
  // people = PEOPLE;
  // Decleared Person with 1 element. Why does it show the whole list?
  // Declare with ':', don't assign with '='

  people: Person[];
  selectedPerson: Person;

  ngOnInit() {
    this.getPeople();
    }

  onSelect(person: Person): void {
    this.selectedPerson = person;
  }

  // Transitioning from Person[] to Observable []
  // getPeople(): void {
  //   this.people = this.MainService.getPeople();
  //  }
  getPeople(): void {
    this.mainService.getPeople()
      .subscribe(people => this.people = people);
  }

}
