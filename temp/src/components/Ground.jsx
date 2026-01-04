import { useRef } from 'react'
import { usePlane } from '@react-three/cannon'
import { MeshStandardMaterial } from 'three'

export default function Ground() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, 0, 0],
    type: 'Static'
  }))

  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[200, 200, 32, 32]} />
      <meshStandardMaterial 
        color="#4a7c59" 
        roughness={0.8}
        metalness={0.2}
      />
    </mesh>
  )
}

