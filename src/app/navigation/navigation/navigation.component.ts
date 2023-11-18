import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../services/navigation.service';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs';
import { even } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less']
})
export class NavigationComponent implements OnInit {

  selectedPage: string = '';

  constructor(private navigationService: NavigationService, private router: Router) { }

  ngOnInit(): void {
    this.navigationService.selectedNav$.subscribe(page=>{
      this.selectedPage = page;
    });
  }

  selectPage(page: string){
    this.navigationService.selectNav(page);
    this.router.navigate([page]);
  }

  isSelected(page: string): boolean{
    return this.selectedPage === page;
  }

}
