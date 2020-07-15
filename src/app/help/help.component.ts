import { Component } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent {

  readonly firsth: string;
  readonly secondh: string;
  readonly thirdh: string;
  readonly dex: string;
   
  constructor(){
    this.firsth = 'Sign up';
    this.secondh =  'Sign in';
    this.thirdh = 'Explore';
    this.dex = 'text-decoration: none;';
  }

}
