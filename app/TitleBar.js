import React from 'react'

import useScenedProperty from './hooks/useScenedProperty'
import useThemedProperty from './hooks/useThemedProperty'

import Styles from './global/Styles'
import Strings from './global/Strings'
import Animated from './Animated'

import {useDispatch} from 'react-redux'
import {toggleTheme} from './redux/actions'

export default function TitleBar(props) {
  console.log('render TitleBar')
  const dispatch = useDispatch()

  const textStyles = [
    styles.text,
    useThemedProperty('color', Styles.colors.black, Styles.colors.white),
  ]

  const containerStyles = [
    styles.container,
    useThemedProperty(
      'backgroundColor',
      Styles.colors.white,
      Styles.darkBackgrounds.titleBar,
    ),
    useScenedProperty('top', {
      default: -64,
      home: 0,
    }),
  ]

  return (
    <Animated.View style={containerStyles}>
      <Animated.View style={styles.titleContainer}>
        <Animated.Text style={textStyles}>{Strings.appTitle}</Animated.Text>
      </Animated.View>
      <Animated.Ripple
        style={styles.actionContainer}
        rippleColor={Styles.colors.primary}
        rippleCentered
        onPress={() => dispatch(toggleTheme())}>
        <Animated.Icon name="brightness-4" style={textStyles} />
      </Animated.Ripple>
    </Animated.View>
  )
}

const styles = {
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    ...Styles.elevation.titleBar,
    flexDirection: 'row',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 24,
    padding: 16,
  },
  titleContainer: {
    flex: 1,
  },
  actionContainer: {
    paddingTop: 4,
  },
}
