import initialState from './initialState';

import { FETCH_JJALS_REQUESTED } from '../actions/jjalActions';

export default function (state = initialState.jjals, action) {
  switch (action.type) {
    case FETCH_JJALS_REQUESTED:
      return state;
    default:
      return state;
  }
}
