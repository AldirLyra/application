import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UsersWithStars } from './model/users-with-stars';
import { UserWithStarsService } from './service/user-with-stars.service';

@Component({
  selector: 'app-list-stars',
  templateUrl: './list-stars.component.html',
  styleUrls: ['./list-stars.component.css']
})
export class ListStarsComponent implements OnInit {

  users!: MatTableDataSource<UsersWithStars>;
  displayedColumns = ['name', 'description', 'urlhtml', 'user']

  constructor(private userWithStarsService: UserWithStarsService) { 
    this.list();
  }

  ngOnInit(): void {
  }

  list(): void {
    this.userWithStarsService.listUserStars().subscribe(
      (data) => this.users = new MatTableDataSource(data)
    );
  }

}
