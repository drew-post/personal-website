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
      'assets/images/andIOopInfo.jpg',
      'assets/images/andIOopHelp.jpg','assets/images/andIOopAvatar.gif',
      'assets/images/andIOopCatFact.gif',
      'assets/images/andIOopRandomDog.gif',
      'assets/images/andIOopVine.gif'
    ],
    link: 'https://github.com/drew-post/andioop'
  };

  constructor() {}

  ngOnInit(): void {}
}
