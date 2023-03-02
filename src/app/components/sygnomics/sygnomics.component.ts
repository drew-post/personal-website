import { Component, OnInit } from '@angular/core';
import { ProjectDetailsItem } from 'src/app/models/projectDetailsItem.model';

@Component({
  selector: 'pw-sygnomics-project',
  templateUrl: './sygnomics.component.html',
  styleUrls: ['./sygnomics.component.scss']
})
export class SygnomicsComponent implements OnInit {

  projectDetails: ProjectDetailsItem = {
    title: "Slalom Build: Sygnomics Internship Project",
    techDescription: ['React', 'Node.js', 'TypeScript', 'Amazon DynamoDB', 'Amazon Simple Storage Service (Amazon S3)', 'AWS Lambda', 'Amazon CloudFront', 'Amazon Cognito'],
    link: "https://www.slalombuild.com/our-work/sygnomics"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
