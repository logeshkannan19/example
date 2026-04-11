<div align="center">
  <img src="https://via.placeholder.com/800x400/1a1a2e/00d9ff?text=Saturn+Particle+Nexus" alt="Saturn Particle Nexus Preview" width="800"/>
  <h1>Saturn Particle Nexus</h1>
  <p>A browser-based 3D visualization of Saturn featuring interactive particle physics and real-time hand tracking.</p>
  <a href="https://saturn-particle-nexus.vercel.app"><img src="https://img.shields.io/badge/Live-Demo-00d9ff?style=for-the-badge" alt="Live Demo"/></a>
  <a href="https://github.com/logeshkannan19/3D-Mavi-Saturn-Interactive-Particles/stargazers"><img src="https://img.shields.io/github/stars/logeshkannan19/3D-Mavi-Saturn-Interactive-Particles?style=social" alt="Stars"/></a>
</div>

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [How It Works](#how-it-works)
- [Technical Details](#technical-details)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

---

## Overview

Saturn Particle Nexus is an interactive 3D visualization that renders a blue-hued Saturn with its ring system using Three.js. The project integrates MediaPipe Hands for real-time hand tracking, allowing users to interact with particle dynamics through webcam gestures. This demonstrates seamless integration of computer vision with 3D graphics, creating an immersive experience where hand gestures control particle behavior in real time.

### Key Highlights

- Real-time hand gesture recognition
- Interactive particle physics system
- Smooth 60fps rendering
- No installation required

---

## Features

| Gesture | Action | Description |
|---------|--------|-------------|
| 🖐️ Open Hand | Attract particles | Particles flow toward your hand position, creating a magnetic effect |
| ✊ Closed Fist | Rotate view | Rotate the planet and rings by moving your fist |

### Upcoming Features

- [ ] Particle trails with motion blur
- [ ] Post-processing bloom effects
- [ ] Touch support for mobile devices
- [ ] Additional gesture controls

---

## Tech Stack

<div align="center">

| Technology | Purpose |
|------------|---------|
| <img src="https://img.shields.io/badge/Three.js-000000?style=flat&logo=three.js" height="20"/> | 3D graphics & particle system |
| <img src="https://img.shields.io/badge/MediaPipe-00bcd4?style=flat" height="20"/> | Hand landmark detection |
| <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5" height="20"/> | Markup |
| <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3" height="20"/> | Styling |

</div>

---

## Getting Started

### Prerequisites

- Modern web browser with WebGL support
- Webcam
- Node.js (optional)

### Quick Start

```bash
# Clone the repository
git clone https://github.com/logeshkannan19/3D-Mavi-Saturn-Interactive-Particles.git
cd 3D-Mavi-Saturn-Interactive-Particles

# Start local server
npx serve .
```

Open `http://localhost:3000` in your browser and allow camera access.

### Alternative Methods

```bash
# Using Python
python -m http.server 8000

# Using PHP
php -S localhost:8000

# Using Node.js
npx http-server .
```

---

## Project Structure

```
Saturn-Particle-Nexus/
├── index.html          # Main HTML with canvas and UI
├── script.js         # Three.js rendering & MediaPipe
├── style.css         # Visual styling
├── README.md         # Documentation
└── LICENSE          # MIT License
```

---

## How It Works

```
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│   Webcam Feed    │ ──► │  MediaPipe Hands │ ──► │   Three.js      │
│                 │     │  Hand Tracking   │     │  Rendering     │
└─────────────────┘     └──────────────────┘     └─────────────────┘
        │                         │                        │
        ▼                         ▼                        ▼
   Video Frames          21 Landmarks           5000+ Particles
                       Detection              Real-time Update
```

### Step-by-Step Process

1. **Hand Detection**: MediaPipe Hands analyzes each video frame from the webcam
2. **Landmark Tracking**: 21 hand landmarks are extracted and mapped to 3D coordinates
3. **Gesture Recognition**: Detects whether the hand is open or closed
4. **Particle Physics**: Applies forces based on hand position
5. **Rendering**: Three.js renders at 60fps

---

## Technical Details

### Particle System

- Three.js `Points` with `BufferGeometry`
- Position, velocity, acceleration per particle
- Automatic respawn when out of bounds
- ~5000 particles for optimal performance

### Hand Tracking

- Operates at ~30fps
- 21 landmarks provide hand pose
- Index finger tip for attraction
- Landmark distances for fist detection

### Performance

- `requestAnimationFrame` for smooth rendering
- Object pooling prevents GC overhead
- WebGL-accelerated graphics

---

## Troubleshooting

### ❌ Camera Not Working

- Grant camera permissions in browser
- Check no other app uses the camera
- Try Chrome (recommended)

### ❌ Low Frame Rate

- Close other webcam apps
- Reduce browser tabs
- Use modern device

### ❌ Black Screen

- Enable WebGL in browser
- Check console errors (F12)
- Update graphics drivers

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing`)
5. Open a Pull Request

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

##Acknowledgments

- [Three.js](https://threejs.org/) - 3D library
- [MediaPipe](https://google.github.io/mediapipe/) - Hand tracking
- Inspired by particle system demos

---

<div align="center">

⭐ Star this project if you found it useful!

[Back to top](#table-of-contents)

</div>