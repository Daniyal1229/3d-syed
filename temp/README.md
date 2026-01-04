# 3D Interactive Portfolio Game

An interactive 3D portfolio game inspired by Bruno Simon's car-game resume. Explore a low-poly 3D world, drive around, and interact with project zones, skills, and contact information.

## Features

- 🚗 **3D Vehicle Control** - Drive a red vehicle using WASD/Arrow keys
- 🏗️ **Interactive Project Zones** - Two project zones with detailed popups:
  - Healthcare Provider Credentialing System
  - Real-Time Chat Application
- 🌲 **Skills Forest** - Physics-based floating skill tags that can be knocked over
- 📧 **Contact Zone** - Interactive mailbox with contact information
- 📹 **Follow Camera** - Top-down orthographic camera that smoothly follows the player
- 🎮 **Physics Engine** - Realistic collisions and physics interactions using Cannon.js

## Setup

1. **Install dependencies:**
```bash
npm install
```

2. **Start development server:**
```bash
npm run dev
```

3. **Open your browser** - The app will automatically open at `http://localhost:3000`

## Controls

- **W / Arrow Up** - Move forward
- **S / Arrow Down** - Move backward  
- **A / Arrow Left** - Turn left
- **D / Arrow Right** - Turn right
- **Click on zones** - Interact with project zones and contact area
- **Drive near zones** - Automatic popup when you're close (within 10 units)

## Project Structure

```
src/
├── components/
│   ├── Scene.jsx          # Main 3D scene with all elements
│   ├── Player.jsx         # Player vehicle with physics
│   ├── Ground.jsx         # Ground plane
│   ├── FollowCamera.jsx   # Camera that follows player
│   ├── ProjectZone.jsx    # Reusable project zone component
│   ├── SkillsForest.jsx   # Skills with physics
│   ├── ContactZone.jsx    # Contact/mailbox zone
│   ├── ZoneDetector.jsx   # Proximity detection for zones
│   ├── UI.jsx             # UI overlays and popups
│   └── useKeyboardControls.js  # Keyboard input handler
├── App.jsx                # Main app component
├── main.jsx               # Entry point
└── index.css              # Global styles with Tailwind
```

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Three.js** - 3D graphics library (via React Three Fiber)
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for R3F
- **@react-three/cannon** - Physics engine integration
- **Cannon.js** - Physics engine
- **Tailwind CSS** - Utility-first CSS framework

## Customization

### Adjusting Player Speed
Edit `src/components/Player.jsx` and modify the `speed` constant (default: 12)

### Changing Zone Positions
Edit `src/components/Scene.jsx` to adjust the `position` prop of zones

### Modifying Skills
Edit the `skills` array in `src/components/SkillsForest.jsx`

### Styling
- UI components use Tailwind CSS classes
- 3D materials can be adjusted in individual component files
- Colors are defined using hex codes in material props

## Portfolio Information

**Syed Daniyal Bokhari**
- MERN Stack Developer
- Location: Bangalore, Karnataka
- Phone: +91 9353252474
- Email: syeddaniyalbokhari72@gmail.com

## Notes

- The game uses an orthographic camera for a top-down view
- Physics interactions work best with the player vehicle and skills
- Zone detection triggers popups automatically when nearby
- All interactive elements can also be clicked directly

