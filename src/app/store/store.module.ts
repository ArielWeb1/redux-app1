import {NgModule} from '@angular/core';
import {NgRedux, NgReduxModule} from '@angular-redux/store';
import {AppState, INITIAL_STATE} from './state.model';
import {rootReducer} from './reducers';

@NgModule({
  imports: [
    NgReduxModule
  ],
  declarations: []
})
export class StoreModule {
  constructor(public store: NgRedux<AppState>) {
    store.configureStore(
      rootReducer,
      INITIAL_STATE
    );
  }
}
