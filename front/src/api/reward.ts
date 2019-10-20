import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reward } from 'src/models';

@Injectable()
export class RewardApi {
  url = 'rewards';
  constructor(private http: HttpClient) {}

  index(): Observable<Reward[]> {
    return this.http.get<Reward[]>(this.url);
  }
  get(id: number): Observable<Reward> {
    return this.http.get<Reward>(`${this.url}/${id}`);
  }
  create(reward: Reward): Observable<Reward> {
    return this.http.post<Reward>(this.url, {
      reward,
    });
  }
  update(reward: Reward): Observable<Reward> {
    return this.http.put<Reward>(`${this.url}/${reward.id}`, {
      reward,
    });
  }
  delete(id: number) {
    this.http.delete(`${this.url}/${id}`);
  }
  approve(id: number): Observable<Reward> {
    return this.http.put<Reward>(`${this.url}/${id}/approve`, {});
  }
}
