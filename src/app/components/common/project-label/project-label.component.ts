import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pw-project-label',
  templateUrl: './project-label.component.html',
  styleUrls: ['./project-label.component.scss']
})
export class ProjectLabelComponent implements OnInit {
  @Input() tags?: String[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
