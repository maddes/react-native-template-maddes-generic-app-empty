import {PUSH_SCENE, POP_SCENE} from '../actionTypes'

const initialState = {
  active: 'home',
  history: [],
}

export default function scenes(state = initialState, action) {
  switch (action.type) {
    case PUSH_SCENE: {
      if (state.active === action.payload) {
        return state
      }
      return {
        ...state,
        active: action.payload,
        history: [].concat(state.history, state.active),
      }
    }
    case POP_SCENE: {
      if (!state.history.length) {
        return state
      }
      return {
        ...state,
        active: state.history.slice(-1)[0],
        history: state.history.slice(0, -1),
      }
    }
    default:
      return state
  }
}
