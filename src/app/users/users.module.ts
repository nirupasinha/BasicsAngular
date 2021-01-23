import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import { UsersComponent } from './users.component';



@NgModule({
  declarations: [LoginComponent, SingupComponent, UsersComponent],
  imports: [
    CommonModule
  ],
  exports:[
    LoginComponent,
    SingupComponent
  ]
})
export class UsersModule { }
