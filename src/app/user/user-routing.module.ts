import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user.component';
import { UserListComponent } from './list/user-list.component';
import { UserDetailComponent } from './detail/user-detail.component';
import { UserAddComponent } from './add/user-add.component';
import { UserEditComponent } from './edit/user-edit.component';

export const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: UserListComponent },
      { path: 'add', component: UserAddComponent },
      { path: 'edit/:id', component: UserEditComponent },
      { path: 'detail/:id', component: UserDetailComponent },
      { path: '**', redirectTo: 'list', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class UserRoutingModule {
}
