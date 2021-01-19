import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UsersModule } from './users/users.module';//because of command line import automatically 

@NgModule({//ngModule is called directives
  declarations: [//components declaration
    AppComponent,
    UserListComponent
    //if we remove the declaration then it will not affect when we try to use or import module to another module it will take error
  ],
  imports: [//import one module to another module
    BrowserModule,
    AppRoutingModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]//bootstrap means which component will use
})
export class AppModule { }
