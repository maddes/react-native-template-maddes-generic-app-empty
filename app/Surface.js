import React from 'react'
import {View} from 'react-native'

import Styles from './global/Styles'

import SplashLogo from './SplashLogo'

export default function Surface(props) {
  console.log('render Surface')

  return (
    <View style={styles.container}>
      <SplashLogo />
    </View>
  )
}

const styles = {
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    ...Styles.elevation.surface,
  },
}
