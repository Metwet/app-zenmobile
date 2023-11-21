import { Component, OnInit } from '@angular/core';
import { User } from 'shared/models/user.model';
import { HttpClient } from '@angular/common/http';
import { ProfileService } from 'shared';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  currentUser!: User;
  message: string | null = null;
  constructor(private http: HttpClient, private profileService: ProfileService) { }

  ngOnInit(): void {
    this._getCurrentUser();

    this.profileService.editMessage$.subscribe((message)=>{
      this.message = message;
      if(message){
        setTimeout(()=>{
          this.profileService.setEditMessage$(null);
        }, 30000);
      }
    })
  }

  private _getCurrentUser(){
    this.http.get<User[]>('api/users').subscribe((data) => {
      this.currentUser = data[0];
    })
  }
}
