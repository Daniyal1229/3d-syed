import { useRef, useEffect } from 'react'
import { Text } from '@react-three/drei'
import { useBox } from '@react-three/cannon'
import { useFrame, useThree } from '@react-three/fiber'
import { Vector3 } from 'three'

const skills = ['React', 'Node.js', 'MongoDB', 'TypeScript', 'Express', 'Socket.io']

function SkillItem({ skill, position, index }) {
  const { camera } = useThree()
  const [ref, api] = useBox(() => ({
    position: [position[0], position[1], position[2]],
    args: [2, 1.5, 0.5],
    mass: 0.5,
    type: 'Dynamic',
    material: {
      restitution: 0.3,
      friction: 0.4
    }
  }))

  const textRef = useRef()
  const bodyPosition = useRef([0, 0, 0])

  useEffect(() => {
    const unsubscribe = api.position.subscribe((pos) => {
      bodyPosition.current = pos
    })
    return unsubscribe
  }, [api])

  useFrame(() => {
    if (textRef.current) {
      const [x, y, z] = bodyPosition.current
      textRef.current.position.set(x, y + 0.5, z)
      
      // Make text face camera
      textRef.current.lookAt(camera.position)
    }
  })

  return (
    <>
      {/* Invisible physics body */}
      <mesh ref={ref} visible={false}>
        <boxGeometry args={[2, 1.5, 0.5]} />
      </mesh>
      
      {/* Visible text */}
      <Text
        ref={textRef}
        fontSize={1.2}
        color="#ffd93d"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.15}
        outlineColor="#000"
        position={[position[0], position[1] + 0.5, position[2]]}
      >
        {skill}
      </Text>
    </>
  )
}

export default function SkillsForest({ position }) {
  return (
    <group position={position}>
      {skills.map((skill, index) => {
        const angle = (index / skills.length) * Math.PI * 2
        const radius = 8
        const x = Math.cos(angle) * radius
        const z = Math.sin(angle) * radius
        return (
          <SkillItem
            key={skill}
            skill={skill}
            position={[x, 5 + index * 0.5, z]}
            index={index}
          />
        )
      })}
      
      <Text
        position={[0, 10, 0]}
        fontSize={2}
        color="#fff"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.2}
        outlineColor="#000"
      >
        Skills Forest
      </Text>
    </group>
  )
}

