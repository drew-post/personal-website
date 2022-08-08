import { Component, OnInit } from '@angular/core';
import { ProjectItem } from 'src/app/models/projectItem.model';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projectItems: ProjectItem[] = [
    {
      title: "Slalom Build Sygnomics Internship Project",
      route: "sygnomics",
      imagePath: "sygnomics"
    },
    {
      title: "My Personal Website",
      route: "personalwebsite",
      imagePath: "personalWebsite"
    },
    {
      title: "andioop Discord Bot",
      route: "andioop",
      imagePath: "andioop"
    },
    {
      title: "Meet the Team Project",
      route: "meettheteam",
      imagePath: "meetTheTeam"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
