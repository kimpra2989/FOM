import { useEffect } from 'react'
import { Mesh, Object3D, Object3DEventMap, Texture, TextureLoader } from 'three'

const useRenderTexture = (
  node: Object3D<Object3DEventMap>,
  textureUrl: string
) => {
  useEffect(() => {
    const loader = new TextureLoader()
    loader.load(textureUrl, (loadedTexture) => {
      applyTextureToGroup(node, loadedTexture)
    })
  }, [textureUrl, node])
}

export default useRenderTexture

function applyTextureToGroup(
  node: Object3D<Object3DEventMap>,
  texture: Texture
) {
  if (node instanceof Mesh) {
    applyTextureToMesh(node, texture)
    return
  }

  node.traverse((child) => {
    if (child instanceof Mesh) {
      applyTextureToMesh(child, texture)
    }
  })
}

// eslint-disable-next-line
function applyTextureToMesh(mesh: Mesh<any, any, any>, texture: Texture) {
  mesh.material.map = texture
  mesh.material.needsUpdate = true
}
