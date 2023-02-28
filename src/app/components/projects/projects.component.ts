import { Component, OnInit } from '@angular/core';
import { ProjectItem } from 'src/app/models/projectItem.model';

@Component({
  selector: 'pw-my-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projectItems: ProjectItem[] = [
    {
      title: "Sygnomics Internship Project",
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
    },
    {
      title: "Chat App",
      route: "chatapp",
      imagePath: "chatApp"
    },
    {
      title: "Weather App",
      route: "weatherapp",
      imagePath: "weatherApp"
    },
    {
      title: "Target Sum Mobile Game",
      route: "targetsumgame",
      imagePath: "targetSumGame"
    },
    {
      title: "Bakesale For Good App",
      route: "bakesaleapp",
      imagePath: "bakesaleApp"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
