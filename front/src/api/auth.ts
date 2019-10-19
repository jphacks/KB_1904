import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Child, Parent } from 'src/models';

@Injectable()
export class Auth {
  constructor(private http: HttpClient) {}

  // login(parent: Parent, child: Child, password: string) {
  //   this.http.post<>('login/')
  // }
  register() {}
}
