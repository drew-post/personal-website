import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pw-project-label',
  templateUrl: './project-label.component.html',
  styleUrls: ['./project-label.component.scss']
})
export class ProjectLabelComponent implements OnInit {
  @Input() isLink: Boolean = false;
  @Input() title: String = '';
  @Input() description?: String = '';
  @Input() link?: String = '';

  constructor() { }

  ngOnInit(): void {
  }

}
