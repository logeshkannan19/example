# Saturn Particle Nexus

A browser-based 3D visualization of Saturn featuring interactive particle physics and real-time hand tracking powered by MediaPipe.

![Three.js](https://img.shields.io/badge/Three.js-r128+-orange?style=flat&logo=three.js)
![MediaPipe](https://img.shields.io/badge/MediaPipe-Hands-blue?style=flat)
![License](https://img.shields.io/badge/License-MIT-green?style=flat)

## Overview

3D Mavi Saturn renders a blue-hued Saturn with its ring system using Three.js. Users interact with particle dynamics via webcam hand tracking. The project demonstrates seamless integration of computer vision with 3D graphics, creating an immersive experience where hand gestures control particle behavior in real time.

## Live Demo

Check it out live: [https://mavi-saturn.vercel.app](https://mavi-saturn.vercel.app)

## Features

| Gesture | Action | Description |
|---------|--------|-------------|
| Open Hand | Attract particles | Particles flow toward your hand position, creating a magnetic effect |
| Closed Fist | Rotate view | Rotate the planet and rings by moving your fist in any direction |

## How It Works

1. **Hand Detection**: MediaPipe Hands analyzes each video frame from the webcam
2. **Landmark Tracking**: 21 hand landmarks are extracted and mapped to 3D coordinates
3. **Gesture Recognition**: The system detects whether the hand is open or closed
4. **Particle Physics**: Based on hand position, particles receive forces that modify their trajectories
5. **Rendering**: Three.js renders the updated particle system at 60fps

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Three.js | 3D graphics rendering and particle system |
| MediaPipe Hands | Real-time hand landmark detection |
| HTML5 Canvas | WebGL rendering context |
| CSS3 | Styling and animations |

## Browser Support

- Chrome (recommended)
- Firefox
- Edge
- Safari (may require additional permissions)

## Getting Started

### Prerequisites

- A modern web browser with WebGL support
- A webcam
- Node.js (optional, for local server)

### Installation

```bash
# Clone the repository
git clone https://github.com/logeshkannan19/3D-Mavi-Saturn-Interactive-Particles.git
cd 3D-Mavi-Saturn-Interactive-Particles
```

### Running the Project

```bash
# Using npx (recommended)
npx serve .

# Or using Python
python -m http.server 8000

# Or using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser and allow camera access when prompted.

## Project Structure

```
3D-Mavi-Saturn-Interactive-Particles/
├── index.html    # Main HTML file with canvas and UI
├── script.js     # Three.js rendering and MediaPipe integration
├── style.css     # Visual styling
└── README.md    # This file
```

## Technical Details

### Particle System

- Uses Three.js `Points` with `BufferGeometry` for efficient rendering
- Each particle has position, velocity, and acceleration properties
- Particles respawn when they move outside the bounds

### Hand Tracking

- MediaPipe Hands operates at ~30fps on most devices
- 21 landmarks provide detailed hand pose information
- Only the_index finger tip position is used for particle attraction
- Fist detection uses landmark distances to determine hand state

### Performance Optimization

- Uses `requestAnimationFrame` for smooth rendering
- Particles are limited to ~5000 for optimal performance
- Object pooling prevents garbage collection overhead

## Troubleshooting

### Camera Not Working

- Ensure you've granted camera permissions in the browser
- Check that no other application is using the camera
- Try a different browser (Chrome recommended)

### Low Frame Rate

- Close other applications using the webcam
- Reduce the number of open browser tabs
- Ensure you're using a modern device

### Black Screen

- Verify WebGL is enabled in your browser
- Check the browser console for errors (F12)
- Try updating your graphics drivers

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Three.js](https://threejs.org/) for the amazing 3D library
- [MediaPipe](https://google.github.io/mediapipe/) for hand tracking solutions
- Inspired by various particle system demos across the web

## Contact

For questions or feedback, please open an issue on GitHub.

---

Star ⭐ this project if you found it useful!