import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../service/login.service';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-in',
  templateUrl: './login-in.component.html',
  styleUrls: ['./login-in.component.css']
})
export class LoginInComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(private router: Router, private LoginService: LoginService, private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.buildForm();
  }

  login() {
    if(this.formGroup.invalid){
      return;
    }
    this.iniciarSesion()
  }
  iniciarSesion() {
    let datos = this.formGroup.value;
    this.LoginService.obtenerUsuario(datos).subscribe(req => {
      if(req){
        this.router.navigate(['/sidenav']);
      }
    })
  }

  private buildForm() {
    // {usuario: ['',Validators.required],contrasena: ['',[Validators.required,Validators.min(4)]],}
    this.formGroup = this.formBuilder.group({
      usuario: new FormControl('',Validators.required),
      contrasena: new FormControl('',[Validators.required,Validators.min(4)])
    });
    console.log(this.formGroup);
  }
  congif() {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");

    sign_up_btn?.addEventListener("click", () => {
      container?.classList.add("sign-up-mode");
    });

    sign_in_btn?.addEventListener("click", () => {
      container?.classList.remove("sign-up-mode");
    });
  }
}
