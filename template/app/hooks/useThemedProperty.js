import {useSelector} from 'react-redux'
import {useSpring} from 'react-spring'

export default function useThemedProperty(property, lightValue, darkValue) {
  const activeTheme = useSelector(state => state.theme.active)

  return useSpring({
    [property]: activeTheme === 'light' ? lightValue : darkValue,
  })
}
