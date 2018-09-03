import { Component, OnInit } from '@angular/core';
import { Http,Response,Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private http:Http) { }
  id:number;
  private headers = new Headers({'Content-Type':'application/json'});
  
  users = [];
  fetchData = function(){
  	this.http.get("http://localhost:4444/users").subscribe(
     (res: Response) => {
     	this.users = res.json();
     }
  		)
  }

  deleteUser = function(id){
    if(confirm("Are you sure?")){

      const url = 'http://localhost:4444/users/';
      const temp=url+id;
      return this.http.delete(temp, {headers:this.headers}).toPromise()
      .then(()=>{
        this.fetchData();
      })
    }
  }
  ngOnInit() {
  	this.fetchData();
  }
 
 
}
