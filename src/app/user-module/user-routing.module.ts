import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './component/users/users.component';
import {AllPostOfUserComponent} from './component/all-post-of-user/all-post-of-user.component';

const routes: Routes = [
  {path: '', component: UsersComponent,
  children:[
    {path: ':id/posts', component: AllPostOfUserComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
