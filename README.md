<div align="center">
  <img src="https://via.placeholder.com/900x450/0a0a1a/00d9ff?text=SATURN+PARTICLE+NEXUS" alt="Saturn Particle Nexus" width="900"/>
  <h1>🪐 Saturn Particle Nexus</h1>
  <p>A browser-based 3D visualization of Saturn featuring interactive particle physics and real-time hand tracking.</p>
  <br>
  <a href="https://saturn-particle-nexus.vercel.app"><img src="https://img.shields.io/badge/LIVE-DEMO-00d9ff?style=for-the-badge&color=00d9ff" alt="Live Demo"/></a>
  <a href="https://github.com/logeshkannan19/3D-Mavi-Saturn-Interactive-Particles/stargazers"><img src="https://img.shields.io/github/stars/logeshkannan19/3D-Mavi-Saturn-Interactive-Particles?style=social&color=00d9ff" alt="Stars"/></a>
  <a href="https://github.com/logeshkannan19/3D-Mavi-Saturn-Interactive-Particles/forks"><img src="https://img.shields.io/github/forks/logeshkannan19/3D-Mavi-Saturn-Interactive-Particles?style=social&color=00d9ff" alt="Forks"/></a>
</div>

---

<p align="center">
<img src="https://img.shields.io/badge/Three.js-000000?style=flat&logo=three.js" height="24"/>
<img src="https://img.shields.io/badge/MediaPipe-00bcd4?style=flat" height="24"/>
<img src="https://img.shields.io/badge/License-MIT-00d9ff?style=flat" height="24"/>
</p>

---

## 📋 Table of Contents

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

---

## 🌟 Overview

Saturn Particle Nexus is an interactive 3D visualization that renders a blue-hued Saturn with its ring system using Three.js. The project integrates MediaPipe Hands for real-time hand tracking, allowing users to interact with particle dynamics through webcam gestures.

> **✨ Experience the future of interaction** - Control cosmic particles with just your hands!

### Key Highlights

| ✨ Real-time Hand Tracking | 🌀 Interactive Particles | 🎮 No Installation |
|--------------------------|----------------------|-------------------|
| MediaPipe-powered gesture recognition | 5000+ physics-driven particles | Browser-based |

---

## 🎯 Features

| Gesture | Action | Description |
|:-------:|--------|-------------|
| 🖐️ | **Attract Particles** | Particles flow toward your hand position |
| ✊ | **Rotate View** | Rotate the planet and rings |

### Upcoming Features

- [ ] 🌈 Particle color customization
- [ ] 📱 Mobile touch support
- [ ] 🎬 Motion blur effects
- [ ] 💫 Bloom post-processing

---

## 🛠️ Tech Stack

<div align="center">

| | |
|:---:|:---|
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="50"/> | **JavaScript** |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="50"/> | **HTML5** |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="50"/> | **CSS3** |

</div>

| Technology | Purpose |
|------------|---------|
| Three.js | 3D graphics & particle system |
| MediaPipe Hands | Hand landmark detection |
| WebGL | GPU-accelerated rendering |

---

## 🚀 Getting Started

### Prerequisites

- ✅ Modern browser with WebGL
- ✅ Webcam
- ✅ Node.js (optional)

### Quick Start

```bash
# Clone the repository
git clone https://github.com/logeshkannan19/3D-Mavi-Saturn-Interactive-Particles.git
cd 3D-Mavi-Saturn-Interactive-Particles

# Start local server
npx serve .
```

> 🔗 Open `http://localhost:3000` and allow camera access

---

## 📁 Project Structure

```
Saturn-Particle-Nexus/
├── 📄 index.html       # Main entry point
├── 📄 script.js       # Three.js + MediaPipe
├── 📄 style.css       # Styling
├── 📄 README.md       # Docs
└── 📄 LICENSE        # MIT License
```

---

## 🔄 How It Works

```
┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│   WEBCAM    │───►│ MEDIAPIPE  │───►│  THREE.JS  │
│   Feed      │    │   Hands    │    │ Rendering  │
└──────────────┘    └──────────────┘    └──────────────┘
       │                   │                   │
       ▼                   ▼                   ▼
  Video Frames      21 Landmarks      5000+ Particles
```

| Step | Process |
|:----:|---------|
| 1️⃣ | MediaPipe analyzes webcam frames |
| 2️⃣ | Extract 21 hand landmarks |
| 3️⃣ | Detect gesture (open/closed) |
| 4️⃣ | Apply forces to particles |
| 5️⃣ | Render at 60fps |

---

## ⚙️ Technical Details

| Specification | Value |
|----------------|-------|
| Particles | ~5000 |
| FPS | 60 |
| Hand Tracking | ~30fps |
| Framework | Three.js r128+ |

- **BufferGeometry** for efficient rendering
- **requestAnimationFrame** for smooth animation
- **Object pooling** prevents GC overhead

---

## 🔧 Troubleshooting

| Issue | Solution |
|:------|----------|
| ❌ Camera not working | Grant permissions / Try Chrome |
| ❌ Low FPS | Close other apps / Use better device |
| ❌ Black screen | Enable WebGL / Update drivers |

---

## 🤝 Contributing

```bash
# 1. Fork
# 2. Create branch
git checkout -b feature/amazing

# 3. Commit
git commit -m 'Add feature'

# 4. Push & PR
```

---

## 📝 License

MIT License - see [LICENSE](LICENSE)

---

<div align="center">

---

⭐ **Star this project if you found it useful!**

**[Back to top](#-table-of-contents)**

</div>