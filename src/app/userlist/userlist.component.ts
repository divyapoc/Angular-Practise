import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  users = [
    {
      Name: "divya",
      Email: "divya@gmail.com",
      gender: "female",
      Password: "12345",
      verified: true

    },
    {
      Name: "kala",
      Email: "kala@gmail.com",
      gender: "female",
      Password: "12345",
      verified: false
    },
    {
      Name: "venkat",
      Email: "venkat@gmail.com",
      gender: "male",
      Password: "1234",
      verified: true
    },
    {
      Name: "Krish",
      Email: "rk@gmail.com",
      gender: "male",
      Password: "12666",
      verified: true
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
