import adminReducer from './adminReducer'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import { fetchImages } from './adminActions.ts';

const rootReducer = combineReducers({
  admin: adminReducer
})

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

store.dispatch(fetchImages())

export default store;
