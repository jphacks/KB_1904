import { Injectable } from '@angular/core';
import { Parent, Child } from 'src/models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserApi {
  constructor(private http: HttpClient) {}
  updateParent(parent: Parent): Observable<Parent> {
    return this.http.put<Parent>(`parents/${parent.id}`, { parent });
  }
  updateChild(child: Child): Observable<Child> {
    return this.http.put<Child>(`children/${child.id}`, { child });
  }
  getParent(): Observable<Parent> {
    return this.http.get<Parent>('parents/me');
  }
  getChild(): Observable<Child> {
    return this.http.get<Child>('children/me');
  }
}
