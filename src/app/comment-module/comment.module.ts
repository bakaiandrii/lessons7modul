import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentRoutingModule } from './comment-routing.module';
import { AllCommentsComponent } from './component/all-comments/all-comments.component';
import {CommentsService} from './service/comments.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [AllCommentsComponent],
  imports: [
    CommonModule,
    CommentRoutingModule,
    HttpClientModule
  ],
  providers: [CommentsService],
})
export class CommentModule { }
