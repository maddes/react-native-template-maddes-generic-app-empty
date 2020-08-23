import {TOGGLE_THEME} from '../actionTypes'

const initialState = {
  active: 'light',
}

export default function search(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_THEME: {
      return {
        ...state,
        active: state.active === 'light' ? 'dark' : 'light',
      }
    }
    default: {
      return state
    }
  }
}
