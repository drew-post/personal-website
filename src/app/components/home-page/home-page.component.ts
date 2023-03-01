import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pw-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  backgroundImages1: String[] = ['homepage-1.png', 'homepage-2.png', 'homepage-3.png', 'homepage-4.png', 'homepage-5.png', 'homepage-6.png'];
  backgroundImages2: String[] = ['homepage-7.png', 'homepage-8.png', 'homepage-9.png', 'homepage-10.png', 'homepage-11.png', 'homepage-12.png'];

  constructor() { }

  ngOnInit(): void {
  }

}
