import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable, of } from 'rxjs';
import { User } from 'shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements InMemoryDbService {
  private users: User[] = [
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'user@mail.ru', phone: '9856829293', siteUrl: 'https://metwet.ru' },
    { id: 2, firstName: 'Luke', lastName: 'Skywalker', email: 'starwars@mail.ru', phone: '9856829293' }
  ];

  createDb() {
    return { users: this.users };
  }

  put(reqInfo: RequestInfo): Observable<{} | Response> {
    if (reqInfo.collectionName === 'users' && reqInfo.method === 'put') {
      const user = reqInfo.utils.getJsonBody(reqInfo.req) as User;
      const existingUser = this.users.find((u) => u.id === user.id);
      
      if(user.firstName.length === 1){
        return reqInfo.utils.createResponse$(() => ({
          status: 400,
          message: 'Invalid firstName length',
        }));
      }

      if (existingUser) {        
        Object.assign(existingUser, user);
        return reqInfo.utils.createResponse$(() => ({
          status: 200,
          body: user,
        }));
      } else {
        return reqInfo.utils.createResponse$(() => ({
          status: 404,
          statusText: 'Not Found',
        }));
      }
    }
  
    return reqInfo.utils.createResponse$(() => ({
      status: 404,
      statusText: 'Not Found',
    }));
  }
  
}