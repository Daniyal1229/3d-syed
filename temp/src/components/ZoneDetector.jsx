import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Vector3 } from 'three'

export default function ZoneDetector({ playerRef, zonePosition, onDetect, detectionDistance = 8 }) {
  const lastDetected = useRef(false)
  const cooldown = useRef(0)

  useFrame(() => {
    if (!playerRef?.current || !onDetect) return

    // Cooldown to prevent rapid triggering
    if (cooldown.current > 0) {
      cooldown.current--
      return
    }

    const playerPos = playerRef.current.position
    const zonePos = new Vector3(...zonePosition)
    const distance = playerPos.distanceTo(zonePos)

    if (distance < detectionDistance && !lastDetected.current) {
      lastDetected.current = true
      cooldown.current = 60 // 1 second at 60fps
      onDetect()
    } else if (distance >= detectionDistance * 1.5) {
      lastDetected.current = false
    }
  })

  return null
}

