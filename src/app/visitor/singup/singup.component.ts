import { Component, ElementRef } from '@angular/core';
import { NgForm, Form } from '@angular/forms';
import { AuthService } from 'src/app/user/auth.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent {

  email: string;
  pass: string;
  f: NgForm;


  constructor(private authService: AuthService) { }

  onSubmit(form: NgForm){
    this.email = form.value['mail'];
    this.pass = form.value['pass'];

    this.authService.singup(this.email, this.pass).subscribe(resData => {
      console.log(resData);
      window.alert("You are now registred");
    },
    errorm => {
      window.alert("Try again");
      console.log(errorm);
     } 
    );

    form.reset();
  }
}
