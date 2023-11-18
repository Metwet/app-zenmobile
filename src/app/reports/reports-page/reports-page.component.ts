import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'app/navigation/services/navigation.service';

@Component({
  selector: 'app-reports-page',
  templateUrl: './reports-page.component.html',
  styleUrls: ['./reports-page.component.less']
})
export class ReportsPageComponent implements OnInit {

  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.navigationService.selectNav('reports');
  }

}
