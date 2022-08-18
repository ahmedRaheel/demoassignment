import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogsService } from '../blogs/blogs.service';
import { Blog } from '../../models/blog'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  /**
   *  private fields
   */
  needsLogin: boolean | undefined;
  _userName: string = '';

  /**
   * Constructor
   * @param route 
   */
  constructor(private route : ActivatedRoute, 
    private blogService : BlogsService) { }

  /**
   * 
   */
   ngOnInit(): void {
    this.blogService.getBlogs(); 
   
  }
  // /**
  //  * 
  //  */
  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }
  
  /**
   * get data from service
   */
  get blobList() : Blog[] {
    return this.blogService.blogList.slice(0,5);      
  }
}
