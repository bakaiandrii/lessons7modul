import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../../interfaces/Post';
import {PostService} from '../../service/post.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  @Input()
  post: Post;

  constructor() { }

  ngOnInit(): void {

  }

}
