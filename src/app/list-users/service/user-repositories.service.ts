import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserRepositories } from '../model/user-repositories';

@Injectable({
  providedIn: 'root'
})
export class UserRepositoriesService {

  constructor(private httpClient : HttpClient) { }

  private readonly DEFAULTREPOSITORIE = 'https://api.github.com/users/rafaballerini/repos?per_page=50';

  public list(){
    console.log(this.DEFAULTREPOSITORIE);
    return this.httpClient.get<UserRepositories[]>(this.DEFAULTREPOSITORIE);
  }
}
