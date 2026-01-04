import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/cannon'
import { Sky } from '@react-three/drei'
import Scene from './components/Scene'
import UI from './components/UI'

function App() {
  const [activePopup, setActivePopup] = useState(null)
  const [showContactForm, setShowContactForm] = useState(false)

  return (
    <div className="w-screen h-screen relative">
      <Canvas
        camera={{
          position: [0, 50, 0],
          zoom: 50,
          near: 0.1,
          far: 1000
        }}
        orthographic
      >
        <Sky
          distance={450000}
          sunPosition={[0, 1, 0]}
          inclination={0}
          azimuth={0.25}
        />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <Physics gravity={[0, -9.81, 0]} defaultContactMaterial={{ friction: 0.4, restitution: 0.3 }}>
          <Scene 
            setActivePopup={setActivePopup}
            setShowContactForm={setShowContactForm}
          />
        </Physics>
      </Canvas>
      
      <UI 
        activePopup={activePopup}
        setActivePopup={setActivePopup}
        showContactForm={showContactForm}
        setShowContactForm={setShowContactForm}
      />
    </div>
  )
}

export default App

