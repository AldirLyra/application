import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { UserRepositories } from './model/user-repositories';
import { UserRepositoriesService } from './service/user-repositories.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users!: MatTableDataSource<UserRepositories>;
  displayedColumns = ['name', 'description', 'urlhtml', 'user']

  constructor(private userRepositoriesService: UserRepositoriesService) { 
    this.list();
  }

  ngOnInit(): void {
  }

  list(): void {
    this.userRepositoriesService.list().subscribe(
      (data) => this.users = new MatTableDataSource(data)
    );
  }
}
