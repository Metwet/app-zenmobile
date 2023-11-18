import { Component, OnInit } from '@angular/core';
import { HomePageService } from '../services';
import { NavigationService } from 'app/navigation/services/navigation.service';


@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    providers: [HomePageService]
})
export class HomePageComponent implements OnInit {

    constructor(private navigationService: NavigationService) {}

    ngOnInit(): void {
        this.navigationService.selectNav('home');
    }
}
