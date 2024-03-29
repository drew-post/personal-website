import { Component, OnInit } from '@angular/core';
import {RouterModule} from '@angular/router';
import { HeaderItem } from 'src/app/models/headerItem.model';

@Component({
  selector: 'pw-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headerItems: HeaderItem[] = [
    {
      title: "Home", 
      route: "home"
    },
    {
      title: "About Me", 
      route: "about"
    },
    {
      title: "Projects", 
      route: "projects"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
