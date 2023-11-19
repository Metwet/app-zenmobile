import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements InMemoryDbService  {

  constructor() { }

  createDb(){
    const users = [
      { id: 1, firstName: 'John', lastName: 'Doe', email: 'jd@mail.ru' },
      { id: 2, firstName: 'Luck', lastName: 'Skyworker', email: 'ls@mail.ru' }
    ];

    return { users };
  }
}
