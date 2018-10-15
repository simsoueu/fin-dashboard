import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.sass']
})
export class NavTopComponent implements OnInit {

  private themeWrapper = document.querySelector('body');

  constructor() { }

  ngOnInit() {
  }

  test() {
    this.themeWrapper.style.setProperty('$other', 'multiple');
    document.querySelector('#main').classList.add('macarrao');
    //style.backgroundColor = 'red';
    
  }

}
