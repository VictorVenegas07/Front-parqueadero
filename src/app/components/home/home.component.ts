import { Component, OnInit } from '@angular/core';
import { navbarHomeData } from '../nav-bar-menu/navbarMunu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  navMenu = navbarHomeData;
  ngOnInit(): void {
  }

}
