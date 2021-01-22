import { Component } from '@angular/core';
import { ArgumentOutOfRangeError } from 'rxjs';


@Component({
  selector: 'app-root',//component name->external html file in body(access in body of root html file )
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SMS';
  name="nirupa sinha"
  getName(){
   return this.name;
   // return "nirupa";
  }
  obj={
    name:"nirupa sinha",
    age:26
  }
  arr=["nirupa","rishi"]
  a=300;
  c=600;
 names="nirupa"
  getAlert(nam:Number)
  {
    alert(nam);
  }
  //function call on event
  myEvent(evt:any){
    console.log(evt);
    
  }
  currentVal="";
  getVal(val:string){
    console.log(val);
    this.currentVal=val;
  }
  disableBOX=true;
  enableBOX(){
this.disableBOX=false;
  }
  show=false;
  hide=false;
  showBoolean="yes";
  showColor="red";
  color='red';
  //For Loop
  data=["Nirupa", "Sinha","rishi","ved","Sarvottam"]
  dataObj=[
    {
      name:'Nirupa',
      age:26,
      email:"niru@gmail.com"
    },
    {
      name:'Sarvottam',
      age:29,
      email:"niru@gmail.com"
    },
    {
      name:'Rishi',
      age:23,
      email:"niru@gmail.com"
    },
    {
      name:'Ved',
      age:30,
      email:""
    }
  ]
  getUserValue(value:any){
    console.log(value);
    
  }
  //style binding
  colorBinding="orange";
  updateColor(){
    this.colorBinding="blue"
  };
  err=false;
}
