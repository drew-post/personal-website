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
      tags: ["React", "Typescript", "Node.js"],
      imagePath: "sygnomics"
    },
    {
      title: "My Personal Website",
      route: "personalwebsite",
      tags: ["Angular", "Typescript", "Github Pages"],
      imagePath: "personalWebsite"
    },
    {
      title: "andioop Discord Bot",
      route: "andioop",
      tags: ["Javascript", "Discord.js", "Node.js"],
      imagePath: "andioop"
    },
    {
      title: "Meet the Team Project",
      route: "meettheteam",
      tags: ["Angular", "Typescript"],
      imagePath: "meetTheTeam"
    },
    {
      title: "Chat App",
      route: "chatapp",
      tags: ["Angular", "Typescript", "Node.js"],
      imagePath: "chatApp"
    },
    {
      title: "Weather App",
      route: "weatherapp",
      tags: ["Angular", "Typescript"],
      imagePath: "weatherApp"
    },
    {
      title: "Target Sum Mobile Game",
      route: "targetsumgame",
      tags: ["React Native"],
      imagePath: "targetSumGame"
    },
    {
      title: "Bakesale For Good App",
      route: "bakesaleapp",
      tags: ["React Native"],
      imagePath: "bakesaleApp"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
