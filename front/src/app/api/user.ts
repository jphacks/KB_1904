import { Injectable } from '@angular/core';
import { Parent, Child } from 'src/models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class User {
  constructor(private http: HttpClient) {}
  updateParent(parent: Parent): Observable<Parent> {
    return this.http.put<Parent>(`parents/${parent.id}`, { parent });
  }
  updateChild(child: Child): Observable<Child> {
    return this.http.put<Child>(`children/${child.id}`, { child });
  }
}
