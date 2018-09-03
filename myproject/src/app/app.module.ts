import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HttpErrorResponse} from '@angular/common/http';
import { HttpModule} from '@angular/http';

import {ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdduserComponent } from './adduser/adduser.component';
import { UserComponent } from './user/User.component';

import{UserService} from './user/user.service';
import { LogoutComponent } from './logout/logout.component';
const appRoutes:Routes=[

  { path:'',redirectTo: '/home',pathMatch:'full'},
  
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'adduser',component:AdduserComponent},
  {path:'user',component:UserComponent},
  {path:'logout',component:LogoutComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    AdduserComponent,UserComponent, LogoutComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),HttpClientModule,FormsModule,ReactiveFormsModule,HttpModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
