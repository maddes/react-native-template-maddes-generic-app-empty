import React from 'react'
import {useDispatch} from 'react-redux'
import {pushScene} from './redux/actions'
import useScenedTransition from './hooks/useScenedTransition'

import Animated from './Animated'

export default function SplashLogo() {
  console.log('render SplashLogo')

  const dispatch = useDispatch()

  const {item, props} = useScenedTransition(['splash'])

  return (
    item && (
      <Animated.View style={props}>
        <Animated.Ripple
          style={styles.button}
          onPress={() => dispatch(pushScene('home'))}>
          <Animated.Text>Continuar</Animated.Text>
        </Animated.Ripple>
      </Animated.View>
    )
  )
}

const styles = {
  button: {
    padding: 16,
  },
}
