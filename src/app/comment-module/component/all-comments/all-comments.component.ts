import { Component, OnInit } from '@angular/core';
import {CommentsService} from '../../service/comments.service';
import {Comments} from '../../../interfaces/Comments';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent implements OnInit {

  comments: Comments[];

  constructor(private commentService: CommentsService) { }

  ngOnInit(): void {
    this.commentService.getAllComments().subscribe(comment => this.comments = comment);
  }

}
