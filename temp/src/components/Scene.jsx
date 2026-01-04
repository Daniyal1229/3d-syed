import { useRef } from 'react'
import Ground from './Ground'
import Player from './Player'
import FollowCamera from './FollowCamera'
import ProjectZone from './ProjectZone'
import SkillsForest from './SkillsForest'
import ContactZone from './ContactZone'
import ZoneDetector from './ZoneDetector'

export default function Scene({ setActivePopup, setShowContactForm }) {
  const playerRef = useRef()

  return (
    <>
      <Ground />
      
      <Player ref={playerRef} />
      
      <FollowCamera target={playerRef} />
      
      {/* Project Zone A - Healthcare Provider Credentialing System */}
      <ProjectZone
        position={[20, 2, 0]}
        type="building"
        title="Healthcare Provider Credentialing System"
        description="React, TypeScript, MobX - Optimized data flow and real-time lookup."
        onInteract={() => setActivePopup('project-a')}
      />
      
      <ZoneDetector
        playerRef={playerRef}
        zonePosition={[20, 0, 0]}
        detectionDistance={10}
        onDetect={() => setActivePopup('project-a')}
      />
      
      {/* Project Zone B - Real-Time Chat App */}
      <ProjectZone
        position={[-20, 2, 0]}
        type="phone"
        title="Real-Time Chat App"
        description="Socket.io, Node.js, MongoDB - Full-stack instant messaging."
        onInteract={() => setActivePopup('project-b')}
      />
      
      <ZoneDetector
        playerRef={playerRef}
        zonePosition={[-20, 0, 0]}
        detectionDistance={10}
        onDetect={() => setActivePopup('project-b')}
      />
      
      {/* Skills Forest */}
      <SkillsForest position={[0, 0, 25]} />
      
      {/* Contact Zone */}
      <ContactZone
        position={[0, 1.5, -25]}
        onInteract={() => setShowContactForm(true)}
      />
      
      <ZoneDetector
        playerRef={playerRef}
        zonePosition={[0, 0, -25]}
        detectionDistance={10}
        onDetect={() => setShowContactForm(true)}
      />
    </>
  )
}

