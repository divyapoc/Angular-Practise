import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-practise',
  templateUrl: './practise.component.html',
  styleUrls: ['./practise.component.css']
})
export class PractiseComponent implements OnInit {
  user = ""
  constructor() { }

  ngOnInit(): void {
  }
  // --------passing data from parent to child----------
  @Input() child: any

  //--------------child to parent-------

  uniquenumber() {
    let x = Math.floor((Math.random() * 10) + 1);
    this.data.emit(x)
  }
  @Output() data = new EventEmitter<any>()

  welcome() {
    alert("welcome" + " " + this.user)
  }

}
