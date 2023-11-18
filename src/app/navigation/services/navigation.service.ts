import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor() { }

  private selectedNavSubject = new BehaviorSubject<string>('');
  selectedNav$ = this.selectedNavSubject.asObservable();

  selectNav(page: string): void{
    this.selectedNavSubject.next(page);
  }
}
