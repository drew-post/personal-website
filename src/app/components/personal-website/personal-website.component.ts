import { Component, OnInit } from '@angular/core';
import { ProjectDetailsItem } from 'src/app/models/projectDetailsItem.model';

@Component({
  selector: 'pw-personal-website',
  templateUrl: './personal-website.component.html',
  styleUrls: ['./personal-website.component.scss']
})
export class PersonalWebsiteComponent implements OnInit {

  projectDetails: ProjectDetailsItem = {
    title: "My Personal Website",
    techDescription: ['Angular', 'Typescript', 'Github Pages'],
    imageArray: [ 'assets/images/personalWebsiteTour.gif' ],
    link: 'https://github.com/drew-post/personal-website'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
