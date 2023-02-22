import { Component, OnInit } from '@angular/core';
import { ProjectDetailsItem } from 'src/app/models/projectDetailsItem.model';

@Component({
  selector: 'pw-and-i-oop',
  templateUrl: './andioop.component.html',
  styleUrls: ['./andioop.component.scss'],
})
export class AndIOopComponent implements OnInit {
  projectDetails: ProjectDetailsItem = {
    title: 'andIOop Discord Bot',
    techDescription: ['Discord.js', 'Javascript', 'Node.js'],
    imageArray: [
      { src: 'assets/images/andIOopInfo.jpg' },
      { src: 'assets/images/andIOopHelp.jpg' },
      { src: 'assets/images/andIOopAvatar.gif' },
      { src: 'assets/images/andIOopCatFact.gif' },
      { src: 'assets/images/andIOopRandomDog.gif' },
      { src: 'assets/images/andIOopVine.gif' },
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
