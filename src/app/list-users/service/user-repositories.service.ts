import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserRepositories } from '../model/user-repositories';

@Injectable({
  providedIn: 'root'
})
export class UserRepositoriesService {

  constructor(private httpClient : HttpClient) { }

  private readonly LISTREPOSITORIES = 'https://api.github.com/users/'+ 'AldirLyra' +'/repos?per_page=50';

  public listUser(){
    return this.httpClient.get<UserRepositories[]>(this.LISTREPOSITORIES);
  }
}
