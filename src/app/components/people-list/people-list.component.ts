import { Component, OnInit } from '@angular/core';
import { People, PeopleListResponse } from 'src/app/interfaces/people-list.interface';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  peopleList: People[] = []

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.fetchPeopleList();
  }

  fetchPeopleList() {
    this.homeService.fetchPeopleList$().subscribe({
      next: (peopleList: PeopleListResponse) => {
        console.log(peopleList);
        this.peopleList = peopleList.results;
      },
      error: (err) => console.log(err)
    })
  }
}
