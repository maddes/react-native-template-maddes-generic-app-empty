import {SEARCH_TYPE, SEARCH_BACKSPACE} from '../actionTypes'

const initialState = {
  search: '',
}

export default function search(state = initialState, action) {
  switch (action.type) {
    case SEARCH_TYPE: {
      return {
        ...state,
        search: `${state.search}${action.payload.number}`,
      }
    }
    case SEARCH_BACKSPACE: {
      return {
        ...state,
        search: state.search.slice(0, -1),
      }
    }
    default: {
      return state
    }
  }
}
