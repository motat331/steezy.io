import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ParamsService {

  private projectDisplayScopeSource = new BehaviorSubject(4);
  currentMessage = this.projectDisplayScopeSource.asObservable();

  constructor() { }

  changeSliceAmount(projectDisplayScope: number) {
    this.projectDisplayScopeSource.next(projectDisplayScope)
  }

}
