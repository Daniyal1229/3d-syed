export default function UI({ activePopup, setActivePopup, showContactForm, setShowContactForm }) {
  const projectData = {
    'project-a': {
      title: 'Healthcare Provider Credentialing System',
      description: 'React, TypeScript, MobX - Optimized data flow and real-time lookup.',
      details: 'Developed a robust provider management interface using React, TypeScript, and Material-UI. Optimized data flow by implementing MobX for efficient state management. Integrated RESTful services for real-time provider lookup and validation with comprehensive error handling.'
    },
    'project-b': {
      title: 'Real-Time Chat Application',
      description: 'Socket.io, Node.js, MongoDB - Full-stack instant messaging.',
      details: 'Built a full-stack instant messaging platform using React.js, Node.js, and Socket.io. Engineered a scalable data layer with MongoDB for secure message retrieval. Designed a modern, responsive UI using Chakra UI.'
    }
  }

  const currentProject = activePopup ? projectData[activePopup] : null

  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Header Info */}
      <div className="absolute top-4 left-4 pointer-events-auto bg-black/70 backdrop-blur-sm text-white p-4 rounded-lg max-w-sm">
        <h1 className="text-2xl font-bold mb-1">Syed Daniyal Bokhari</h1>
        <p className="text-sm text-gray-300">MERN Stack Developer</p>
        <p className="text-xs text-gray-400 mt-2">📍 Bangalore, Karnataka</p>
      </div>

      {/* Controls Instructions */}
      <div className="absolute bottom-4 left-4 pointer-events-auto bg-black/70 backdrop-blur-sm text-white p-3 rounded-lg">
        <p className="text-sm font-semibold mb-2">Controls:</p>
        <div className="text-xs space-y-1">
          <p>WASD / Arrow Keys - Move</p>
          <p>Click on zones to interact</p>
        </div>
      </div>

      {/* Project Popup */}
      {currentProject && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
          <div className="bg-black/90 backdrop-blur-md text-white p-8 rounded-lg max-w-2xl mx-4 border border-gray-700">
            <button
              onClick={() => setActivePopup(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors text-2xl font-bold w-8 h-8 flex items-center justify-center"
            >
              ×
            </button>
            <h2 className="text-3xl font-bold mb-4">{currentProject.title}</h2>
            <p className="text-xl text-yellow-400 mb-4">{currentProject.description}</p>
            <p className="text-gray-300">{currentProject.details}</p>
          </div>
        </div>
      )}

      {/* Contact Form */}
      {showContactForm && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
          <div className="bg-black/90 backdrop-blur-md text-white p-8 rounded-lg max-w-md mx-4 border border-gray-700">
            <button
              onClick={() => setShowContactForm(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors text-2xl font-bold w-8 h-8 flex items-center justify-center"
            >
              ×
            </button>
            <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
            
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-400 mb-1">Phone</p>
                <a 
                  href="tel:+919353252474" 
                  className="text-lg text-yellow-400 hover:text-yellow-300 transition-colors"
                >
                  +91 9353252474
                </a>
              </div>
              
              <div>
                <p className="text-sm text-gray-400 mb-1">Email</p>
                <a 
                  href="mailto:syeddaniyalbokhari72@gmail.com"
                  className="text-lg text-yellow-400 hover:text-yellow-300 transition-colors break-all"
                >
                  syeddaniyalbokhari72@gmail.com
                </a>
              </div>
              
              <div className="pt-4 border-t border-gray-700">
                <p className="text-sm text-gray-400 mb-2">Location</p>
                <p className="text-white">Bangalore, Karnataka, India</p>
              </div>
              
              <div className="pt-4 border-t border-gray-700">
                <p className="text-sm text-gray-400 mb-2">Links</p>
                <div className="flex gap-4">
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-yellow-400 hover:text-yellow-300 transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-yellow-400 hover:text-yellow-300 transition-colors"
                  >
                    GitHub
                  </a>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-yellow-400 hover:text-yellow-300 transition-colors"
                  >
                    Portfolio
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

