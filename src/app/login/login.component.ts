import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 name=""
 password=""
  users =[
    {
      Name : "divya",
      Password:"12345",
      verified:true

    },
    {
      Name : "kala",
      Password:"12345",
      verified:true
    },
    {
      Name : "venkat",
      Password:"1234",
      verified:false
    },
  
  ]
  constructor() { }

  ngOnInit(): void {
  }
 verify(){
  for(let x of this.users) {
   if(x.Name === this.name && x.Password === this.password){
    alert("Welcome"+" "+x.Name)
   }
   
  }
 
 }
 
}
