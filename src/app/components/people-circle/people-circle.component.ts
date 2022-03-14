import { Component, Input, OnInit } from '@angular/core';
import { People } from 'src/app/interfaces/people-list.interface';

@Component({
  selector: 'app-people-circle',
  templateUrl: './people-circle.component.html',
  styleUrls: ['./people-circle.component.scss']
})
export class PeopleCircleComponent implements OnInit {
  @Input() peopleDetails!: People
  constructor() { }

  ngOnInit(): void {
  }

}
