import { combineReducers } from 'redux';

const initialState = 'ALL';

const visibilityFilter = (state = initialState, action: any) => {
    switch (action.type) {
      case 'SET_FILTER': {
        return action.payload.filter;
      }
      default: {
        return state;
      }
    }
  };

export const rootReducer = combineReducers({ visibilityFilter });
