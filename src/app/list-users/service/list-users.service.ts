import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserRepositories } from '../model/user-repositories';

@Injectable({
  providedIn: 'root'
})
export class ListUsersService {

  constructor(private httpClient : HttpClient) { }

  private readonly LISTREPOSITORIES = 'https://api.github.com/users/'+ 'AldirLyra' +'/repos?per_page=50';

  public listUser(){
    return this.httpClient.get<UserRepositories[]>(this.LISTREPOSITORIES);
  }
  
}
