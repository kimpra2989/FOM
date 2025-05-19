import { useAnimations, useGLTF } from '@react-three/drei'
import { useEffect } from 'react'
import { LoopOnce } from 'three'

const useCharacter = (modelUrl: string) => {
  const { animations, nodes, scene } = useGLTF(modelUrl)
  const { actions, names } = useAnimations(animations, scene)

  // animation
  const action = actions?.[names[0]]

  useEffect(() => {
    if (!action) return

    action.loop = LoopOnce
    action.play()
  })

  const play = () => {
    action?.play()
  }
  const stop = () => {
    action?.stop()
  }

  const replay = () => {
    action?.reset()
    action?.play()
  }

  return {
    scene,
    nodes,
    animation: {
      play,
      stop,
      replay,
    },
  }
}

export default useCharacter
