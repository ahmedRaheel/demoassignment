import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/models/user';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {

  /**
   *  private fields
   */
  displayedColumns = ['id', 'name', 'username', 'email'];
  dataSource: MatTableDataSource<User> = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  listView = true;
  totalRows = 0;
  pageSize = 5;
  currentPage = 0;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  dtOptions: DataTables.Settings = {};
  
  /**
   * 
   * @param userService 
   */
  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    
    this.userService.getUsers();   
   
  }
  
  /**
   * 
   */
   ngAfterViewInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true, 
      
    };   
  }

   /**
   * 
   */
  get userList(): User[]{  

     return this.userService.userList;
  }
  
  /**
   * 
   * @param event 
   */
  pageChanged(event: PageEvent) {
    console.log({ event });
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    //this.userList();
  }

  toggleView(showListView : boolean) {
     this.listView = showListView;
  }
}
