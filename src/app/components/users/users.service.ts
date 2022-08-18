import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  /**
   *   private const variable to hold values 
   */
  private readonly API_URL = 'https://jsonplaceholder.typicode.com/';
  private readonly GET_USERS = 'users'
  userList: User[] = [];

  /**
   *  Constructor
   * @param client 
   */
  constructor(private client : HttpClient) { }

  getUsers() {
    this.client.get<User[]>(this.API_URL + this.GET_USERS).subscribe(result => 
      {
          this.userList = result;
      },err => {
        console.error('error loading', err);
      });
  }
}
