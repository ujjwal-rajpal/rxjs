import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {
  value: string;;
  constructor() { }

  ngOnInit() {
    let promise : any= new Promise((resolve,reject)=>{
      setTimeout(()=>{
        reject('Promise Rejected');
      }, 3000)
     
    })
    promise.then((res)=>{
      this.value=res
    }).catch((res)=>{
      this.value=res
    })
  }


}
