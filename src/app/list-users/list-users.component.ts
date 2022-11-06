import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserRepositories } from './model/user-repositories';
import { UserRepositoriesService } from './service/user-repositories.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users!: MatTableDataSource<UserRepositories>;
  displayedColumns = ['id', 'name', 'description', 'urlGithub', 'urlHtml']

  constructor(private userRepositoriesService: UserRepositoriesService) { 
    this.list();
  }

  ngOnInit(): void {
  }

  list(): void {
    this.userRepositoriesService.listUser().subscribe(
      (data) => this.users = new MatTableDataSource(data)
    );
  }
}
