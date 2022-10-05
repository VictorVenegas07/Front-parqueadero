import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-in',
  templateUrl: './login-in.component.html',
  styleUrls: ['./login-in.component.css']
})
export class LoginInComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
//     const sign_in_btn = document.querySelector("#sign-in-btn");
//     const sign_up_btn = document.querySelector("#sign-up-btn");
//     const container = document.querySelector(".container");

// sign_up_btn?.addEventListener("click", () => {
//   container?.classList.add("sign-up-mode");
// });

// sign_in_btn?.addEventListener("click", () => {
//   container?.classList.remove("sign-up-mode");
// });
  }

  login(){
    this.router.navigate(['/sidenav']);
  }
}
