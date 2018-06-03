import {Component} from '@angular/core';
import {NgRedux, select, NgReduxModule} from '@angular-redux/store';
import {AppState} from './store/state.model';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  template: ` <button (click="myCheck()">Test</button>
  <label><input type="number" [(ngModel)] = "textValue"/></label>
  <li *ngFor="let numItem of item | async;">{{numItem}}</li> `
})

export class AppComponent {
  @select('item') readonly item: Observable<any>;
  textValue: number;

  constructor(private ngRedux: NgRedux<AppState>) {
    this.item.subscribe(newList => console.log(newList));
  }

  myCheck() {
    this.ngRedux.dispatch({
      type: '',
      payload: this.textValue
    });
  }

}
