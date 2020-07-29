import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {UsersService} from './service/users.service';
import {HttpClientModule} from '@angular/common/http';
import { AllPostOfUserComponent } from './component/all-post-of-user/all-post-of-user.component';
import {PostModule} from '../post-module/post.module';


@NgModule({
  declarations: [AllPostOfUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule,
    PostModule
  ],
  providers: [UsersService],
})
export class UserModule { }
