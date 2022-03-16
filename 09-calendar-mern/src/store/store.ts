import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { rootReducer } from './reducers/rootReducer';

const composeEnhancers =
  (typeof (window as any) !== 'undefined' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
