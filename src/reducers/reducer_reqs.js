import _ from 'lodash';
import { createSelector } from 'reselect';
import {
  FETCH_CREDIT_REQS,
  SHOW_CREDIT_HEALTH,
  SHOW_TERM_LOAN
} from '../actions/lending';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_CREDIT_REQS:
      return {
        ...state,
        requirements: action.reqs
      };
    case SHOW_CREDIT_HEALTH:
      return {
        ...state,
        creditView: true,
        loanView: false
      };
    case SHOW_TERM_LOAN:
      return {
        ...state,
        creditView: false,
        loanView: true
      };
    default:
      return state;
  }
}

export const getLendingState = createSelector(
  state => state,
  state => _.get(state, "lending")
);

export const getLendingRequirements = createSelector(getLendingState, lendingState =>
  _.get(lendingState, "requirements")
);

export const getCreditViewStatus = createSelector(getLendingState, lendingState =>
  _.get(lendingState, "creditView")
);

export const getLoanViewStatus = createSelector(getLendingState, lendingState =>
  _.get(lendingState, "loanView")
);
