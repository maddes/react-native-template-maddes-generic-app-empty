import {Dimensions} from 'react-native'

import Color from 'color'

const layers = [
  'content',
  'titleBar',
  'number',
  'bottomSheet',
  'floatingButton',
]

function getElevations() {
  const elevations = {}

  // eslint-disable-next-line no-unused-vars
  for (const layer in layers) {
    let elevation = layer * 5

    elevations[layers[layer]] = {
      elevation,
      shadowColor: 'black',
      shadowOffset: {width: 0, height: 0.5 * elevation},
      shadowOpacity: 0.3,
      shadowRadius: 0.8 * elevation,
    }
  }

  return elevations
}

function getDarkBackgrounds() {
  const elevations = {}

  // eslint-disable-next-line no-unused-vars
  for (const layer in layers) {
    elevations[layers[layer]] =
      layer === 0
        ? '#121212'
        : Color('#009688')
            .blacken(0.95 - 0.01 * layer)
            .hex()
  }

  return elevations
}

export default {
  elevation: getElevations(),
  darkBackgrounds: getDarkBackgrounds(),
  dimensions: {
    device: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  },
  colors: {
    white: '#FFFFFF',
    black: 'black',
    primary: '#009688',
    primaryLight: '#B2DFDB',
    primaryDark: '#00796B',
    primaryText: '#212121',
    secondaryText: '#757575',
    accent: '#FF5722',
    divider: 'rgba(0,0,0,.1)',
    surface: '#f0f0f0',
  },
  dark: {
    surface: '#121212',
    primaryText: 'rgba(255,255,255,.87)',
    divider: 'rgba(255,255,255,.1)',
  },
}
