import { Component, OnInit } from '@angular/core';
import { ProjectDetailsItem } from 'src/app/models/projectDetailsItem.model';

@Component({
  selector: 'pw-meet-the-team',
  templateUrl: './meet-the-team.component.html',
  styleUrls: ['./meet-the-team.component.scss']
})
export class MeetTheTeamComponent implements OnInit {
  projectDetails: ProjectDetailsItem = {
    title: 'Meet The Team Project',
    techDescription: ['Angular', 'TypeScript'],
    imageArray: [
      'assets/images/meetTheTeamGridListView.gif',
      'assets/images/meetTheTeamSearch.gif',
      'assets/images/meetTheTeamSort.gif'
    ],
    link: 'https://github.com/drew-post/meet-the-team'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
