import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent implements OnInit {
  sidebarShow = false;

  constructor() { }

  ngOnInit(): void {
  }

  maskClick() {
    this.sidebarShow = false;
  }

  menuButtonClick() {    
    this.sidebarShow = true;
  }
}
