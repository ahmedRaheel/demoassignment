import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { UsersComponent } from './components/users/users.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [    
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    BlogsComponent,
    UsersComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,    
    MatDividerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    FlexLayoutModule,
    MatFormFieldModule, 
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
