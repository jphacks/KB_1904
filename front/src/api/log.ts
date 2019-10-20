import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuestAchievement, RewardAcquisition, PointGrant } from 'src/models';

@Injectable()
export class LogApi {
  constructor(private http: HttpClient) {}

  achievements(): Observable<QuestAchievement[]> {
    return this.http.get<QuestAchievement[]>('quest_achievements');
  }
  acquisitions(): Observable<RewardAcquisition[]> {
    return this.http.get<RewardAcquisition[]>('reward_acquisision');
  }
  grants(): Observable<PointGrant[]> {
    return this.http.get<PointGrant[]>('point_grant');
  }
}
