import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { MainService } from '../main.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  people: Person[] = [];

  constructor(private mainservice: MainService) { }

  ngOnInit() {
    this.getPeople();
  }

  getPeople(): void {
    this.mainservice.getPeople()
      .subscribe(people => this.people = people.slice(1, 4));
  }

}
