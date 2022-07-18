import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  tagline: String = "Hi, I'm Drew."

  bioText: String = "I recently graduated Summa Cum Laude from Texas State University with a major in Computer Science and a minor in Media Studies, and I now work as a Software Engineer at Slalom Build, where I focus on implementing outcome oriented software solutions in highly skilled teams for a diverse set of clients. I recently have experience in React, Angular, and SwiftUI. \n\nI enjoy problem solving, and I constantly strive to collaborate, learn new things, and grow my skillset overall. Additionally, I'm driven to use best practices in all aspects of my career. On top of my more technical career interests, I enjoy critically consuming and engaging with different types of media, and I seek to bring those skills into aspects of my work and broader life experiences.\n\nIn my free time, I like to thrift, read, travel, and drink coffee.";

  constructor() { }

  ngOnInit(): void {
  }

}
