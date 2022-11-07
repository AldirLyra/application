import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsersWithStars } from '../model/users-with-stars';

@Injectable({
  providedIn: 'root'
})
export class UserWithStarsService {

  constructor(private httpClient : HttpClient) { }

  private readonly LISTSTARS = 'https://api.github.com/users/'+ 'rafaballerini' +'/starred';

  public listUserStars(){
    return this.httpClient.get<UsersWithStars[]>(this.LISTSTARS);
  }
}
