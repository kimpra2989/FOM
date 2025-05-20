import { Center, Gltf, useAnimations, useGLTF } from '@react-three/drei'
import { FC, Ref, useEffect } from 'react'
import { Group, LoopOnce } from 'three'

interface Props {
  url: string
}

const Character: FC<Props> = ({ url }) => {
  const { animations } = useGLTF(url)
  const { ref, actions, names } = useAnimations(animations)

  useEffect(() => {
    const action = actions?.[names[0]]
    if (!action) return

    action.loop = LoopOnce
    action?.play()
  })

  return (
    <Center>
      <Gltf src={url} ref={ref as Ref<Group>} />
    </Center>
  )
}

export default Character

// const texture1 = useTexture('/pattern1.png')
// const texture2 = useTexture('/pattern2.png')
// const texture3 = useTexture('/pattern3.png')
// const texture4 = useTexture('/pattern4.png')

// FOR LATER : texture 입히기
// const name1 = 'EAR003'
// const name2 = 'gloves005'
// const name3 = 'top_right003'
// const name4 = 'shoes003'

// function applyTextureToGroup(group: Group, texture: Texture) {
//   group.traverse((child) => {
//     if (child.type === 'Mesh') {
//       const mesh = child as Mesh
//       if (mesh.material && 'map' in mesh.material) {
//         mesh.material.map = texture
//         mesh.material.needsUpdate = true
//       }
//     }
//   })
// }

// useEffect(() => {
// FOR LATER : texture 입히기
// applyTextureToGroup(nodes[name1], texture2)
// const material1 = nodes[name1].material
// // // material1.color.set('white')
// material1.map = texture1
// material1.needsUpdate = true
// }, [texture1,  nodes])

// nodes[name1].visible = false
