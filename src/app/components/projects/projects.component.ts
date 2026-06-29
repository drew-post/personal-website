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
      imagePath: "sygnomics.jpg"
    },
    {
      title: "My Personal Website",
      route: "personalwebsite",
      tags: ["Angular", "Typescript", "Github Pages"],
      imagePath: "personalWebsite.jpg"
    },
    {
      title: "andioop Discord Bot",
      route: "andioop",
      tags: ["Javascript", "Discord.js", "Node.js"],
      imagePath: "andIOopInfo.jpg"
    },
    {
      title: "Meet the Team Project",
      route: "meettheteam",
      tags: ["Angular", "Typescript"],
      imagePath: "meetTheTeamHomepage.jpg"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
