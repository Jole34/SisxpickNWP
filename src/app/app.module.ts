import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { ExploreComponent } from './visitor/explore/explore.component';
import { SinginComponent } from './visitor/singin/singin.component';
import { SingupComponent } from './visitor/singup/singup.component';
import { HelpComponent } from './help/help.component';
import { Help2Component } from './help/help2/help2.component';
import { FooterComponent } from './help/footer/footer.component';
import { HeadComponent } from './user/head/head.component';
import { SidebarComponent } from './user/sidebar/sidebar.component';
import { CsIComponent } from './user/cs-i/cs-i.component';
import { CsIIComponent } from './user/cs-ii/cs-ii.component';
import { QaComponent } from './user/qa/qa.component';
import { FormsModule }  from '@angular/forms'

import { HttpClientModule } from '@angular/common/http'
import { AuthService } from 'src/app/user/auth.service';
import { AuthGuard }  from 'src/app/user/auth-guard.service';
import { Database }  from 'src/app/user/db.service';




const appRoutes: Routes  = [
  {path: '', component: HelpComponent},
  {path: 'explore', component: ExploreComponent},
  {path: 'signIn', component: SinginComponent},
  {path: 'signUp', component: SingupComponent},

  {path: 'userMain/courseI', component: CsIComponent, canActivate: [AuthGuard]},
  {path: 'userMain/courseII', component: CsIIComponent, canActivate: [AuthGuard]},
  {path: 'userMain/qa', component: QaComponent, canActivate: [AuthGuard]}
  
 

];
@NgModule({
  declarations: [
    AppComponent,
    ExploreComponent,
    SinginComponent,
    SingupComponent,
    HelpComponent,
    Help2Component,
    FooterComponent,
    HeadComponent,
    SidebarComponent,
    CsIComponent,
    CsIIComponent,
    QaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService, AuthGuard, Database],
  bootstrap: [AppComponent]
})
export class AppModule { }
