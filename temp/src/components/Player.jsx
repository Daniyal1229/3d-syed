import { forwardRef, useRef, useEffect } from 'react'
import { useBox } from '@react-three/cannon'
import { useFrame } from '@react-three/fiber'
import { useKeyboardControls } from './useKeyboardControls'

const Player = forwardRef((props, ref) => {
  const [boxRef, api] = useBox(() => ({
    mass: 1,
    type: 'Dynamic',
    position: [0, 1, 0],
    args: [1, 0.5, 1.5],
    material: {
      friction: 0.8,
      restitution: 0.1
    }
  }))

  const velocity = useRef([0, 0, 0])
  const keys = useKeyboardControls()

  useEffect(() => {
    api.velocity.subscribe((v) => (velocity.current = v))
  }, [api])

  const rotationRef = useRef(0)

  useFrame(() => {
    const [x, y, z] = velocity.current
    const speed = 12
    const turnSpeed = 0.05

    let forward = 0
    let turn = 0

    // Forward/Backward
    if (keys.current['w'] || keys.current['ArrowUp']) forward = 1
    if (keys.current['s'] || keys.current['ArrowDown']) forward = -1

    // Turn Left/Right
    if (keys.current['a'] || keys.current['ArrowLeft']) turn = 1
    if (keys.current['d'] || keys.current['ArrowRight']) turn = -1

    // Update rotation
    if (turn !== 0) {
      rotationRef.current += turn * turnSpeed
    }

    // Apply movement based on rotation
    if (forward !== 0) {
      const force = forward * speed
      api.velocity.set(
        Math.sin(rotationRef.current) * force,
        y,
        Math.cos(rotationRef.current) * force
      )
      
      // Update mesh rotation
      if (boxRef.current) {
        boxRef.current.rotation.y = rotationRef.current
      }
    } else {
      // Apply friction
      api.velocity.set(x * 0.85, y, z * 0.85)
    }

    // Apply rotation to mesh even when not moving
    if (turn !== 0 && boxRef.current) {
      boxRef.current.rotation.y = rotationRef.current
    }

    // Forward ref to parent
    if (ref) {
      if (typeof ref === 'function') {
        ref(boxRef.current)
      } else {
        ref.current = boxRef.current
      }
    }
  })

  return (
    <mesh ref={boxRef} castShadow>
      <boxGeometry args={[1, 0.5, 1.5]} />
      <meshStandardMaterial color="#ff6b6b" metalness={0.3} roughness={0.4} />
      {/* Simple car representation */}
      <group position={[0, 0.3, 0]}>
        <mesh>
          <boxGeometry args={[0.8, 0.3, 0.8]} />
          <meshStandardMaterial color="#ff8e8e" />
        </mesh>
      </group>
    </mesh>
  )
})

Player.displayName = 'Player'

export default Player

