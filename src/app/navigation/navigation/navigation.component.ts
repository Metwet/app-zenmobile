import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../services/navigation.service';
import { Router } from '@angular/router';
import { AuthService } from 'core/services';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less']
})
export class NavigationComponent implements OnInit {

  selectedPage: string = '';
  showNavigation!: boolean;

  constructor(private navigationService: NavigationService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.navigationService.selectedNav$.subscribe(page=>{
      this.selectedPage = page;
    });

    this.authService.userId$.subscribe(()=>{
      if(this.authService.isAuthenticated()){
        this.showNavigation = true;
      } else {
        this.showNavigation = false;      
      }
    })
  }

  selectPage(page: string){
    this.navigationService.selectNav(page);
    this.router.navigate([page]);
  }

  isSelected(page: string): boolean{
    return this.selectedPage === page;
  }

}
