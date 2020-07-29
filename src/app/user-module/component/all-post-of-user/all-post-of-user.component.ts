import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../../interfaces/Post';
import {UsersService} from '../../service/users.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-all-post-of-user',
  templateUrl: './all-post-of-user.component.html',
  styleUrls: ['./all-post-of-user.component.css']
})
export class AllPostOfUserComponent implements OnInit {

  postOfUser: Post[];

  constructor(private userService: UsersService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
   this.activatedRoute.params.subscribe(value => {
     this.userService.getPostByUserId(value.id).subscribe(post => this.postOfUser = post);
   });
  }

}
