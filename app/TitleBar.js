import React from 'react'
import Ripple from 'react-native-material-ripple'
import {useSpring} from 'react-spring'

import Styles from './global/Styles'
import Strings from './global/Strings'
import Animated from './Animated'

import {useDispatch, useSelector} from 'react-redux'
import {toggleTheme} from './redux/actions'

export default function TitleBar(props) {
  console.log('render TitleBar')
  const dispatch = useDispatch()
  const activeTheme = useSelector(state => state.theme.active)

  const containerAnimatedStyles = useSpring({
    backgroundColor:
      activeTheme === 'light'
        ? Styles.colors.white
        : Styles.darkBackgrounds.titleBar,
  })

  const textAnimatedStyles = useSpring({
    color: activeTheme === 'light' ? Styles.colors.black : Styles.colors.white,
  })

  // Create unified style for container
  const textStyles = [styles.text, textAnimatedStyles]

  return (
    <Animated.View style={[styles.container, containerAnimatedStyles]}>
      <Animated.View style={styles.titleContainer}>
        <Animated.Text style={textStyles}>{Strings.appTitle}</Animated.Text>
      </Animated.View>
      <Ripple
        style={styles.actionContainer}
        rippleColor={Styles.colors.primary}
        rippleCentered={true}
        onPress={() => dispatch(toggleTheme())}>
        <Animated.Icon name="brightness-4" style={textStyles} />
      </Ripple>
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
