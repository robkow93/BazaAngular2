import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { SharedModule } from '../../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';


import { UserAddComponent } from './add/user-add.component';
import { UserEditComponent } from './edit/user-edit.component';
import { UserDetailComponent } from './detail/user-detail.component';
import { UserListComponent } from './list/user-list.component';

import { FormsModule }   from '@angular/forms';  // <-- NgModel lives here
import {UserService} from './user.service';


import { HttpModule, JsonpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { InMemoryDataService }  from './usersdb.service';




@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    HttpModule,
    JsonpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    //SharedModule
  ],
  declarations: [
    UserComponent,
    UserAddComponent,
    UserEditComponent,
    UserDetailComponent,
    UserListComponent
  ],
  providers:[UserService]
})
export class UserModule { }
