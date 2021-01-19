import { Component } from '@angular/core';

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
}
