import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    const res = this.http.get<User[]>(
      'https://jsonplaceholder.typicode.com/users'
    );
    return res;
  }
}
