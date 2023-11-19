import { Component, OnInit } from '@angular/core';
import { User } from 'shared/models/user.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  currentUser!: User;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this._getCurrentUser();
  }

  private _getCurrentUser(){
    this.http.get<User[]>('api/users').subscribe((data) => {
      this.currentUser = data[0];
    })
  }
}
