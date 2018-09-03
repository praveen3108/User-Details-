import { Component, OnInit } from '@angular/core';
import{UserService} from './user.service';
import  {User}from './user';
import {clone} from 'lodash';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  angForm:FormGroup;
  
  
   createForm(){
    this.angForm=this.builder.group({
      id:['',Validators.required],
      name:['',Validators.required],
      mail:['',Validators.required]
    });
  }
  users:User[];
  userForm:boolean=false;
  isNewUser:boolean;
  newUser:any={};
  editUserForm:boolean=false;
  editedUser:any={};
  constructor(private userService:UserService,private builder:FormBuilder) {  this.createForm();}

  ngOnInit() {
    this.getUsers();
  }
  getUsers=function(){
    this.users=this.userService.getUsersFromData();
  }

  showEditUserForm(user:User){
    if(!user){
      this.userForm=false;
      return;
    }
    this.editUserForm=true;
    this.editedUser=clone(user);


  }
  showAddUserForm(){

    // resets form if edited user
    if(this.users.length){
      this.newUser={};
    }
    this.userForm=true;
    this.isNewUser=true;

  }
  saveUser=function(user:User){
    if(this.isNewUser){
      //add a new user
      this.userService.addUser(user);
    }
    this.userForm=false;
  }
  updateUser(){
    this.userService.updateUser(this.editedUser);
    this.editUserForm=false;
    this.editedUser={};
  }

  removeUser(user:User){
    this.userService.deleteUser(user);
  }
  cancelEdits(){
    this.editedUser={};
    this.editUserForm=false;
  }

  cancelNewUser(){
    this.newUser={};
    this.userForm=false;
  }
}
