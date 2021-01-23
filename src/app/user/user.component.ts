import { Component, OnInit , Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() hero:any;
@Output() parentComponent:EventEmitter<any>= new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    console.log(this.hero)
    this.parentComponent.emit("hello")
  }
  sendData(){
    let item=(name:'nirupa', age:30)=>
    this.parentComponent.emit(item)
  }

}
