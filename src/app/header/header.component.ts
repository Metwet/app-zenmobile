import { Component, OnInit } from '@angular/core';
import { User } from 'shared/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  currentUser: User = {
    firstName: 'John',
    lastName: 'Doe'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
