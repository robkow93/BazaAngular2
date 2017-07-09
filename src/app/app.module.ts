import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//import { UserFormComponent } from './user-form.component';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent } from './app.component';

import {UserModule} from './user/user.module';

//import { FormsModule }   from '@angular/forms';

//import 'hammerjs';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, AppRoutingModule, UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
