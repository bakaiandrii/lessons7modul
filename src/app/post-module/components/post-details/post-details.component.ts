import { Component, OnInit } from '@angular/core';
import {PostService} from '../../service/post.service';
import {ActivatedRoute} from '@angular/router';
import {Post} from '../../../interfaces/Post';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post: Post;

  constructor(private postService: PostService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      this.postService.getPost(value.id).subscribe(post => this.post = post);
    });
  }

}
