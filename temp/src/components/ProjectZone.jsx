import { useRef, useState } from 'react'
import { useBox } from '@react-three/cannon'
import { Text, Box } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function ProjectZone({ 
  position, 
  type, 
  title, 
  description, 
  onInteract 
}) {
  const [ref] = useBox(() => ({
    position,
    args: [5, 5, 5],
    type: 'Static'
  }))

  const [hovered, setHovered] = useState(false)
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <group ref={ref} position={position}>
      {type === 'building' ? (
        <Box
          ref={meshRef}
          args={[4, 4, 4]}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onClick={onInteract}
        >
          <meshStandardMaterial 
            color={hovered ? "#ffd93d" : "#6bcf7f"} 
            metalness={0.3}
            roughness={0.7}
          />
        </Box>
      ) : (
        <group
          ref={meshRef}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onClick={onInteract}
        >
          <Box args={[2, 3, 0.3]}>
            <meshStandardMaterial 
              color={hovered ? "#ffd93d" : "#4dabf7"} 
              metalness={0.5}
              roughness={0.3}
            />
          </Box>
          <Box args={[2.2, 0.2, 0.3]} position={[0, -1.4, 0]}>
            <meshStandardMaterial 
              color={hovered ? "#ffd93d" : "#4dabf7"} 
              metalness={0.5}
              roughness={0.3}
            />
          </Box>
        </group>
      )}
      
      <Text
        position={[0, 5, 0]}
        fontSize={1}
        color="#fff"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.1}
        outlineColor="#000"
      >
        {title}
      </Text>
    </group>
  )
}

