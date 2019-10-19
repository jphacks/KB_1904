import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quest } from 'src/models/quest';

@Injectable()
export class QuestApi {
  url = 'quest';
  constructor(private http: HttpClient) {}

  index(): Observable<Quest[]> {
    return this.http.get<Quest[]>(this.url);
  }
  get(id: number): Observable<Quest> {
    return this.http.get<Quest>(`${this.url}/${id}`);
  }
  create(quest: Quest): Observable<Quest> {
    return this.http.post<Quest>(this.url, {
      quest,
    });
  }
  update(quest: Quest): Observable<Quest> {
    return this.http.put<Quest>(`${this.url}/${quest.id}`, {
      quest,
    });
  }
  delete(id: number) {
    this.http.delete(`${this.url}/${id}`);
  }
  approve(id: number) {
    this.http.put<Quest>(`${this.url}/${id}/approve`, {});
  }
}
