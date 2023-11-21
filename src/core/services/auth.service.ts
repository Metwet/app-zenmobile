import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable, map } from 'rxjs';
import { User } from 'shared/models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {

    private apiUrl = 'api/users';
    private localStorageKey = 'userId';

    private userIdSubject: BehaviorSubject<number | null> = new BehaviorSubject<number | null>(null);

    constructor(private http: HttpClient) {}

    login(email: string, password: string): Observable<string | number> {
        return this.http.get<User[]>(this.apiUrl).pipe(
            map((users: User[]) => {
                const user = users.find(u => u.email === email);
        
                if (!user) {
                  return 'User not found';
                }
        
                if (user.password === password) {
                  return user.id;
                } else {
                  return 'Invalid password';
                }
            }),
            map(result => result !== undefined ? result : 'user not found')
        );
    }

    saveUserIdToLocalStorage(userId: number) {
        localStorage.setItem(this.localStorageKey, userId.toString());
        this.userIdSubject.next(userId);
    }
    
    getStoredUserId(): number | null {
        const storedUserId = localStorage.getItem(this.localStorageKey);
        return storedUserId ? +storedUserId : null;
    }
    
    isAuthenticated(): boolean {
        return this.getStoredUserId() !== null;
    }
    
    logout() {
        localStorage.removeItem(this.localStorageKey);
        this.userIdSubject.next(null);
    }

    get userId$(): Observable<number | null> {
        return this.userIdSubject.asObservable();
    }
}
