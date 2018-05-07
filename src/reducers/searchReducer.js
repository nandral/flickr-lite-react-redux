// action types
import * as Actions from '../actions/types';

// reducer with initial state
const initialState = {
  fetching: false,
  error: null,
  items: [],
  searchText: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case Actions.SEARCH_REQUEST:
      return { ...state, fetching: true, error: null, items: [] };
    case Actions.SEARCH_COMPLETED:
      const { items, searchText } = action.payload;
      return { ...state, fetching: false, items, searchText };
    case Actions.API_CALL_FAILURE:
      return { ...state, fetching: false, dog: null, error: action.error };
    default:
      return state;
  }
}
