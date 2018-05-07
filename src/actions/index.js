import { takeLatest, call, put } from 'redux-saga/effects';
import * as Actions from './types';
import jquery from 'jquery';
window.$ = window.jQuery = jquery;

const URL = 'https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield takeLatest(Actions.SEARCH_REQUEST, searchSaga);
}

// function that makes the api request and returns a Promise for response
function searchTag(payload) {
  console.log('searchTag ::', payload);
  return $.getJSON(URL, {
    tags: payload,
    format: 'json'
  }).then(data => data);
}

// worker saga: makes the api call when watcher saga sees the action
function* searchSaga(action) {
  try {
    const response = yield call(searchTag, action.payload);
    console.log('searchSaga::', response.items);
    const payload = { searchText: action.payload, items: response.items };
    yield put({ type: Actions.SEARCH_COMPLETED, payload });
  } catch (error) {
    // console.log(' 111 err');
    console.log('error.message', error.message);
    // // dispatch a failure action to the store with the error
    yield put({ type: 'API_CALL_FAILURE', error });
  }
}
