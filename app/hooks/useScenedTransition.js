import {useSelector} from 'react-redux'
import {useTransition} from 'react-spring'

export default function useThemedTransition(activeScenes, lifecycles) {
  const activeScene = useSelector(state => state.scene.active)

  return useTransition(
    activeScenes.includes(activeScene),
    null,
    lifecycles || {
      from: {opacity: 0},
      enter: {opacity: 1},
      leave: {opacity: 0},
    },
  )[0]
}
