import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { HttpClient } from '@angular/common/http';
import { Child, Parent } from 'src/models';
import { RemoveToken, SetToken } from '../store/jwt-token.store';
import { AppState } from '../store';
import { AuthApi } from '../api';

export interface TokenParam {
  token: string;
}

@Injectable()
export class AuthService {
  constructor(
    private store: Store<AppState>,
    private api: AuthApi,
  ) {}
  register(_parent: Parent, _child: Child, _password: string, isParent: boolean): Observable<string> {
    const deviceToken = localStorage.getItem('device-token');
    return this.api.register(_parent, _child, _password, deviceToken, isParent);
  }
  login(_email: string, _password: string): Observable<string> {
    return this.api.login(_email, _password);
  }
  get(): string | null {
    return this.api.getToken();
  }
  exist(): boolean {
    return this.api.existToken();
  }
  remove() {
    this.api.removeToken();
  }
}
