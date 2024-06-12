import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenService {
  constructor(private httpService: HttpClient) {}
  url = 'http://localhost:8000/auth/';
  register(email: string, password: string) {
    return this.httpService.post(this.url + 'register', { email, password });
  }
}
