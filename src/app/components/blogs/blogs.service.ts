import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from 'src/app/models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  /**
   *   private const variable to hold values 
   */
  private readonly API_URL = 'https://jsonplaceholder.typicode.com/';
  private readonly GET_POSTS = 'posts'
  blogList: Blog[] = [];

  /**
   *  Constructor
   * @param client 
   */
  constructor(private client : HttpClient) { }

  getBlogs() {
    this.client.get<Blog[]>(this.API_URL + this.GET_POSTS).subscribe(result => 
      {
          this.blogList = result;
      },err => {
        console.error('error loading', err);
      });
  }
}
