import { Component, OnInit } from '@angular/core';
import { Http,Response,Headers} from '@angular/http';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor(private http:Http) { }
  confirmationString:string = "User Added";
  isAdded:boolean = false;
  userObj:object = { };

  addNewUser = function(user){
  	this.userObj = {
  		"name":user.name,
  		
  		"email":user.email,
  		"role":user.role
  	}
  	this.http.post("http://localhost:4444/users/",this.userObj).subscribe((res: Response) => {
     	this.isAdded = true;
     }
  		)
  }


  ngOnInit() {
  }
   
  
}
