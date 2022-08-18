import { Component, OnInit, ViewChild } from '@angular/core';
import { BlogsService } from './blogs.service';
import { Blog } from '../../models/blog'
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.sass']
})
export class BlogsComponent implements OnInit {
  /** private properties */
  // displayedColumns = ['id', 'title', 'userId','body'];
  // dataSource!: MatTableDataSource<Blob>;
  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  // @ViewChild(MatSort) sort!: MatSort;
  

  /**
   * 
   * @param blogService 
   */
  constructor(private blogService : BlogsService) { 
    
  }
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
    return this.blogService.blogList;      
  }
}