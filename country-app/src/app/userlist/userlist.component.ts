import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'

import { UserapiService } from '../userapi.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

  userList: any = [];
  list: string = "cdsf";
  lis: string = "abhi nahi bana";
  constructor(private userApi: UserapiService,
              private location: Location) { }

  ngOnInit(): void {
  }

  makeList(): void{
    this.list += this.userApi.getUsers();
    this.userList = JSON.parse(this.list);
  }

  goBack(): void{
    this.location.back();
  }

}
