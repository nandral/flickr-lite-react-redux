import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers';
import { watcherSaga } from '../actions';

// // create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// dev tools middleware
//const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// create a redux store with our reducer above and middleware
let store = createStore(reducers, compose(applyMiddleware(sagaMiddleware)));
// run the saga
sagaMiddleware.run(watcherSaga);

export default store;
