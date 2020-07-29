import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import {HttpClientModule} from '@angular/common/http';
import {PostService} from './service/post.service';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';


@NgModule({
  declarations: [AllPostsComponent, SinglePostComponent, PostDetailsComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule
  ],
  providers: [PostService],
  exports: [
    SinglePostComponent
  ]
})
export class PostModule { }
