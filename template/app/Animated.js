import {Text, View} from 'react-native'
import {animated} from 'react-spring'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Ripple from 'react-native-material-ripple'

export default {
  Text: animated(Text),
  View: animated(View),
  Icon: animated(Icon),
  Ripple,
}
