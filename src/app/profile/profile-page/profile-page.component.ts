import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'app/navigation/services/navigation.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.less']
})
export class ProfilePageComponent implements OnInit {

  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.navigationService.selectNav('profile');
  }

}
