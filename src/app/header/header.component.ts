import { Component, OnInit } from '@angular/core';
import { User } from 'shared/models/user.model';
import { HttpClient } from '@angular/common/http';
import { ProfileService } from 'shared';
import { AuthService } from 'core/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  currentUser!: User;
  currentUserId!: number | null;
  message: string | null = null;

  constructor(
    private profileService: ProfileService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.currentUserId = this.authService.getStoredUserId();
    // this._getCurrentUser();
    this.authService.userId$.subscribe(()=>{
      console.log('subscribe');
      
      this.currentUserId = this.authService.getStoredUserId();
      this._getCurrentUser();
    })

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
    if(this.currentUserId){
      this.profileService.getUserById(this.currentUserId).subscribe((user: User) => {
        if (user) {
          this.currentUser = user;
        }
      });
    }   
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/auth']);
  }
}
