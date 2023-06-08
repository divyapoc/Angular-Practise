import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstapp';
  // passing data from parent to child and vice-versa
  parent = [
    {
      Name: "divya",
      rollno: 10653
    },
    {
      Name: "Priya",
      rollno: 10654
    },
    {
      Name: "subi",
      rollno: 10655
    }
  ]
  randomnumber: any;
  getdata(value: any) {
    this.randomnumber = value
  }

}
