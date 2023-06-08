import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  constructor() { }
  stopprocess: Subscription;

  ngOnInit(): void {
    const observe$ = new Observable((obs) => {
      obs.next('200')
      obs.next('success-300')
      obs.next('success-400')
      setTimeout(() => {
        obs.next('async-500')   //asynchronous  
      }, 2000)
      // obs.error('error-500')
      // obs.complete()
      obs.next('success-600')
      obs.next('success-700')

    })
    this.stopprocess = observe$.subscribe({
      complete: () => {
        console.log("process completed")
      },
      error: (err) => {
        console.log(err)
      },
      next: (value) => {
        console.log(value)
      },
    })
    this.stopprocess.unsubscribe() //unsubscribes when delay occurs

    // observe$.subscribe((value) => {
    //   console.log("obs value:", value)
    // })
  }

}
