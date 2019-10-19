import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { Child, Parent } from 'src/models';
import { AppState } from '../store';
import { UserApi } from '../api';

@Injectable()
export class UserService {
  constructor(
    private store: Store<AppState>,
    private api: UserApi,
  ) {}
  updateParent(parent: Parent): Observable<Parent> {
    return this.api.updateParent(parent);
  }
  updateChild(child: Child): Observable<Child> {
    return this.api.updateChild(child);
  }
  getParent(): Observable<Parent> {
    return this.api.getParent();
  }
  getChild(): Observable<Child> {
    return this.api.getChild();
  }
}
