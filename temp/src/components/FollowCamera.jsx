import { useThree, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Vector3 } from 'three'

export default function FollowCamera({ target }) {
  const { camera } = useThree()
  const offset = useRef(new Vector3(0, 50, 0))

  useFrame(() => {
    if (target?.current) {
      const targetPosition = target.current.position
      const desiredPosition = new Vector3(
        targetPosition.x + offset.current.x,
        offset.current.y,
        targetPosition.z + offset.current.z
      )
      
      camera.position.lerp(desiredPosition, 0.1)
      camera.lookAt(targetPosition.x, 0, targetPosition.z)
    }
  })

  return null
}

