import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'app/navigation/services/navigation.service';

@Component({
  selector: 'app-billing-page',
  templateUrl: './billing-page.component.html',
  styleUrls: ['./billing-page.component.less']
})
export class BillingPageComponent implements OnInit {

  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.navigationService.selectNav('billing');
  }

}
