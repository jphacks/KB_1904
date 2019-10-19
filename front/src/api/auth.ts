import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { HttpClient } from '@angular/common/http';
import { Child, Parent } from 'src/models';
import { RemoveToken, SetToken } from '../store/jwt-token.store';
import { AppState } from '../store';

export interface TokenParam {
  token: string;
}

@Injectable()
export class AuthApi {
  key = 'jwt-token';
  constructor(private store: Store<AppState>, private http: HttpClient) {}

  register(_parent: Parent, _child: Child, _password: string): Observable<string> {
    return this.http
      .post('register', {
        parent: _parent,
        child: _child,
        password: _password,
      })
      .pipe(
        map((_: TokenParam) => {
          this.setToken(_.token);
          return _.token;
        })
      );
  }

  login(_email: string, _password: string): Observable<string> {
    return this.http
      .post('login', {
        email: _email,
        password: _password,
      })
      .pipe(
        map((_: TokenParam) => {
          this.setToken(_.token);
          return _.token;
        })
      );
  }

  getToken(): string | null {
    return localStorage.getItem(this.key);
  }

  existToken(): boolean {
    const token = localStorage.getItem(this.key);
    return token === null;
  }

  private setToken(token: string) {
    this.store.dispatch(new SetToken(token));
  }

  removeToken() {
    this.store.dispatch(new RemoveToken());
  }
}
