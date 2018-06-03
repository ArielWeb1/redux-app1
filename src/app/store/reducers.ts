import {Action} from './actions';
import {AppState} from './state.model';

export const rootReducer = function (state: AppState, action: Action): AppState {
  const newState = Object.assign({}, {
    item: Array.from(state.item)
});
  newState.item.push(action.payload);
  return newState;
};
