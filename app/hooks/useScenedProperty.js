import {useSelector} from 'react-redux'
import {useSpring} from 'react-spring'

export default function useThemedProperty(property, values) {
  const activeScene = useSelector(state => state.scene.active)

  return useSpring({
    [property]:
      values[activeScene] !== undefined ? values[activeScene] : values.default,
  })
}
