import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'app/navigation/services/navigation.service';

@Component({
  selector: 'app-inventory-page',
  templateUrl: './inventory-page.component.html',
  styleUrls: ['./inventory-page.component.less']
})
export class InventoryPageComponent implements OnInit {

  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.navigationService.selectNav('inventory');
  }

}
