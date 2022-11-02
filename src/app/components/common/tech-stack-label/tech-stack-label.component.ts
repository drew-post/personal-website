import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pw-tech-stack-label',
  templateUrl: './tech-stack-label.component.html',
  styleUrls: ['./tech-stack-label.component.scss']
})
export class TechStackLabelComponent implements OnInit {
  @Input() techDescription: String = '';

  constructor() { }

  ngOnInit(): void {
  }

}
