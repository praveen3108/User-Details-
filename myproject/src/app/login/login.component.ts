import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  angForm:FormGroup;
  
  constructor(private router:Router,private builder:FormBuilder) {
    this.createForm();
   }
   createForm(){
    this.angForm=this.builder.group({
      mail:['',Validators.required],
      pass:['',Validators.required]
    });
  }

  ngOnInit() {
  }
  loginUser(e){
    e.preventDefault();
    console.log(e);
    var username=e.target.elements[0].value;
    var password=e.target.elements[1].value;
   if(username=="admin@gmail.com" && password=="admin"){
      this.router.navigate(['dashboard']);
     
   }
  else if(username=="praveen@gmail.com" && password=="praveen"){
    this.router.navigate(['dashboard']);
   
 }
   else{
     alert("Login failed");
   }
  }
      
    
  }


