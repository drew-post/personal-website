import { Component, OnInit } from '@angular/core';
import { ProjectDetailsItem } from 'src/app/models/projectDetailsItem.model';

@Component({
  selector: 'sygnomics-project',
  templateUrl: './sygnomics.component.html',
  styleUrls: ['./sygnomics.component.scss']
})
export class SygnomicsComponent implements OnInit {

  projectDetails: ProjectDetailsItem = {
    title: "Sygnomics Internship Project — Summer 2021",
    link: "https://www.slalombuild.com/our-work/sygnomics",
  }

  constructor() { }

  ngOnInit(): void {
  }

}
