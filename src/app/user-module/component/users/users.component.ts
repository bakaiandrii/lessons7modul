import { Component, OnInit } from '@angular/core';
import {PostService} from '../../../post-module/service/post.service';
import {UsersService} from '../../service/users.service';
import {User} from '../../../interfaces/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(value => this.users = value);
  }

}
