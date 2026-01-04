import { useRef, useState } from 'react'
import { useBox } from '@react-three/cannon'
import { Text, Box } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function ContactZone({ position, onInteract }) {
  const [ref] = useBox(() => ({
    position,
    args: [6, 4, 6],
    type: 'Static'
  }))

  const [hovered, setHovered] = useState(false)
  const meshRef = useRef()

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(Date.now() * 0.001) * 0.3
    }
  })

  return (
    <group ref={ref} position={position}>
      <Box
        ref={meshRef}
        args={[5, 3, 5]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={onInteract}
      >
        <meshStandardMaterial 
          color={hovered ? "#ff6b6b" : "#ff8787"} 
          metalness={0.4}
          roughness={0.6}
        />
      </Box>
      
      <Text
        position={[0, 5, 0]}
        fontSize={2}
        color="#fff"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.2}
        outlineColor="#000"
      >
        Contact Me
      </Text>
      
      <Text
        position={[0, -4, 0]}
        fontSize={1}
        color="#ffd93d"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.1}
        outlineColor="#000"
      >
        Click to open contact form
      </Text>
    </group>
  )
}

