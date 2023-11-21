import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'shared/models/user.model';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {
    private apiUrl = 'api/users';

    private editMessageSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

    constructor(private http: HttpClient) {}

    getUserById(id: number) { 
        const url = `${this.apiUrl}/${id}`;
        return this.http.get<User>(url);
    }

    updateUserProfile(user: User): Observable<User> {
        const url = `${this.apiUrl}/${user.id}`;
        return this.http.put<User>(url, user);
    }
    
    get editMessage$(): Observable<string | null> {
        return this.editMessageSubject.asObservable();
    }

    setEditMessage$(message: string | null): void{
        this.editMessageSubject.next(message);
    }
}
