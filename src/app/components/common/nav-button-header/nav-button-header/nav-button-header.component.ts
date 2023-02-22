import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pw-nav-button-header',
  templateUrl: './nav-button-header.component.html',
  styleUrls: ['./nav-button-header.component.scss']
})
export class NavButtonHeaderComponent implements OnInit {
  @Input() previousRoute?: String = '';
  @Input() nextRoute?: String = '';

  constructor() { }

  ngOnInit(): void {
  }

}
