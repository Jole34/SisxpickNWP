import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy{
  private userSub: Subscription;
  isauth = false;
  constructor(private authService: AuthService, private route: Router) { }

  logout(){
    this.authService.user.next(null);
    this.route.navigate(['/']);
  }
  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe( user => {
      this.isauth = !!user;
    });

  }
  ngOnDestroy(): void{
    this.userSub.unsubscribe();
  }

}
