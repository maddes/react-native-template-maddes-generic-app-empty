import {
  POP_SCENE,
  PUSH_SCENE,
  SEARCH_TYPE,
  SEARCH_BACKSPACE,
  SET_THEME,
  TOGGLE_THEME,
} from './actionTypes'

export const popScene = () => ({
  type: POP_SCENE,
})

export const pushScene = scene => ({
  type: PUSH_SCENE,
  payload: scene,
})

export const searchType = character => ({
  type: SEARCH_TYPE,
  payload: {character},
})

export const searchBackspace = () => ({
  type: SEARCH_BACKSPACE,
})

export const setTheme = theme => ({
  type: SET_THEME,
  payload: {theme},
})

export const toggleTheme = () => ({
  type: TOGGLE_THEME,
})
