import { Component, OnInit } from '@angular/core';
import {PostService} from '../../service/post.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
  posts: any[];

  constructor(private postService: PostService) {

  }

  ngOnInit(): void {
    this.postService.getAllPost().subscribe(value => this.posts = value);
  }

}
