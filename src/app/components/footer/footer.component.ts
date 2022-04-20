import { Component, OnInit } from '@angular/core';
import { FooterItem } from 'src/app/models/footerItem.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footerItems: FooterItem[] = [
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/drew-post",
      imagePath: "linkedin"
    },
    {
      title: "Github",
      link: "https://github.com/drew-post",
      imagePath: "github"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
