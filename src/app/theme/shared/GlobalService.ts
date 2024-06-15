import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GlobalService {
  private globalBooleanSubject = new BehaviorSubject<boolean>(false);
  globalBoolean$ = this.globalBooleanSubject.asObservable();

  public setGlobalBoolean(value: boolean) {
    this.globalBooleanSubject.next(value);
  }
}
