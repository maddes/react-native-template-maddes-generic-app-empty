/**
 * Himnario Adventista moderno (by 2020 standards)
 * https://gitlab.com/mediia/himnario-moderno
 *
 * @format
 * @flow
 */

import React from 'react'
import {Provider} from 'react-redux'
import store from './app/redux/store'

import TitleBar from './app/TitleBar'
import Splash from './app/Surface'

export default () => {
  return (
    <Provider store={store}>
      <TitleBar />
      <Splash />
    </Provider>
  )
}
