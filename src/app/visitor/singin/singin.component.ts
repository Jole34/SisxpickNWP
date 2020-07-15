import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/user/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent   {

  pass: string;
  name: string;
  f: NgForm;


  constructor(private authService: AuthService, private router: Router) { }
  
  onSubmit(form: NgForm){
    this.name = form.value['mail'];
    console.log(this.name);
    this.pass = form.value['pass'];

    this.authService.signIn(this.name, this.pass).subscribe(resData => {
      console.log(resData);
      this.router.navigate(['/userMain/qa']);
    },
    errorm => {
      window.alert("Try again");
      console.log(errorm);
     } 
    );

    form.reset();
  
  }
}
