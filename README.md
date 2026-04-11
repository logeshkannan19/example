<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=rect&color=0a0a1a&height=300&section=header&text=SATURN%20PARTICLE%20NEXUS&fontSize=80&fontAlign=50&animation=twinkin" width="900"/>
  <br><br>
  <h1>🪐 Saturn Particle Nexus</h1>
  <p>A browser-based 3D visualization of Saturn featuring interactive particle physics and real-time hand tracking.</p>
  <br>
  
|[![Live Demo](https://img.shields.io/badge/🚀-LIVE_DEMO-00d9ff?style=for-the-badge&color=00d9ff)](https://saturn-particle-nexus.vercel.app)|[![Stars](https://img.shields.io/github/stars/logeshkannan19/3D-Mavi-Saturn-Interactive-Particles?style=for-the-badge&color=00d9ff)](https://github.com/logeshkannan19/3D-Mavi-Saturn-Interactive-Particles/stargazers)|[![Forks](https://img.shields.io/github/forks/logeshkannan19/3D-Mavi-Saturn-Interactive-Particles?style=for-the-badge&color=00d9ff)](https://github.com/logeshkannan19/3D-Mavi-Saturn-Interactive-Particles/network)|
|:---:|:---:|:---:|
  
[![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js)](https://threejs.org/)|[![MediaPipe](https://img.shields.io/badge/MediaPipe-00bcd4?style=for-the-badge)](https://google.github.io/mediapipe/)|[![License](https://img.shields.io/badge/License-MIT-00d9ff?style=for-the-badge)](https://github.com/logeshkannan19/3D-Mavi-Saturn-Interactive-Particles/blob/main/LICENSE)|
  
</div>

---

## 📋 Table of Contents

| Section | Description |
|---------|-------------|
| [🌟 Overview](#-overview) | Project introduction |
| [🎯 Features](#-features) | Core functionalities |
| [🛠️ Tech Stack](#-tech-stack) | Technologies used |
| [🚀 Getting Started](#-getting-started) | Installation guide |
| [📁 Project Structure](#-project-structure) | File organization |
| [🔄 How It Works](#-how-it-works) | Technical workflow |
| [⚙️ Technical Details](#-technical-details) | Specifications |
| [🔧 Troubleshooting](#-troubleshooting) | Common issues |
| [🤝 Contributing](#-contributing) | How to contribute |
| [📝 License](#-license) | MIT License |

---

## 🌟 Overview

Saturn Particle Nexus is an interactive 3D visualization that renders a blue-hued Saturn with its ring system using Three.js. The project integrates MediaPipe Hands for real-time hand tracking, allowing users to interact with particle dynamics through webcam gestures.

| | |
|:---|:---|
| 📹 **Real-time Tracking** | MediaPipe-powered hand gesture recognition |
| 🌀 **5000+ Particles** | Physics-driven particle system |
| 🎮 **Gesture Control** | Open hand attracts, fist rotates |
| ⚡ **60 FPS** | Smooth rendering performance |
| 🌐 **No Install** | Runs directly in browser |

---

## 🎯 Features

### Hand Gestures

| Gesture | Emoji | Action | Description |
|:-------:|:-----:|--------|-------------|
| 🖐️ Open Hand | 👋 | **Attract** | Particles flow toward your hand |
| ✊ Closed Fist | ✊ | **Rotate** | Rotate planet and rings |

### Current Features

| ✅ | Feature | Description |
|:---:|---------|-------------|
| ✓ | 3D Saturn Rendering | Blue-hued planet with rings |
| ✓ | Hand Tracking | MediaPipe integration |
| ✓ | Particle System | 5000+ interactive particles |
| ✓ | Gesture Control | Real-time gesture recognition |
| ✓ | Smooth Animation | 60fps rendering |

### Upcoming Features

| 🚧 | Feature | Status |
|:---:|---------|--------|
| 🌈 | Color Customization | Planned |
| 📱 | Mobile Touch Support | Planned |
| 🎬 | Motion Blur Effects | Planned |
| 💫 | Bloom Post-Processing | Planned |
| 🔊 | Sound Effects | Planned |
| 📸 | Screenshot Feature | Planned |

---

## 🛠️ Tech Stack

<div align="center">

| JavaScript | HTML5 | CSS3 |
|:---:|:---:|:---:|
|<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="60"/>|<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="60"/>|<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="60"/>|

</div>

| Technology | Version | Purpose |
|------------|---------|---------|
| Three.js | r128+ | 3D graphics rendering |
| MediaPipe | Latest | Hand landmark detection |
| WebGL | 2.0 | GPU-accelerated graphics |
| HTML5 | 5 | Markup structure |
| CSS3 | 3 | Visual styling |

---

## 🚀 Getting Started

### Prerequisites

| Requirement | Description |
|-------------|-------------|
| 🌐 Browser | Chrome, Firefox, Edge (WebGL enabled) |
| 📷 Webcam | For hand tracking |
| 📶 Internet | CDN resources |

### Installation

```bash
# Clone the repository
git clone https://github.com/logeshkannan19/3D-Mavi-Saturn-Interactive-Particles.git

# Navigate to project
cd 3D-Mavi-Saturn-Interactive-Particles

# Start local server
npx serve .
# OR
python -m http.server 8000
```

### Alternative Run Methods

```bash
# Using Node.js http-server
npx http-server .

# Using PHP
php -S localhost:8000

# Using Ruby
ruby -run -ehttpd . -p8000
```

> 🔗 **Open** `http://localhost:3000` in your browser  
> 📷 **Allow** camera access when prompted  
> 👋 **Wave** your hand to interact!

---

## 📁 Project Structure

```
Saturn-Particle-Nexus/
├── 📄 index.html          # Main HTML entry point
├── 📄 script.js          # Three.js + MediaPipe logic
├── 📄 style.css         # CSS styling
├── 📄 README.md         # Documentation
├── 📄 LICENSE           # MIT License
└── 🔒 .gitignore       # Git ignore rules
```

| File | Description |
|------|-------------|
| index.html | Canvas element + video feed |
| script.js | Particle system + hand tracking |
| style.css | Visual styling |

---

## 🔄 How It Works

```
┌────────────────────────────────────────────────────────────────────────┐
│                        SYSTEM ARCHITECTURE                             │
├────────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   ┌──────────┐      ┌───────────┐      ┌────────────┐               │
│   │  WEBCAM  │ ───► │ MEDIAPIPE │ ───► │  THREE.JS  │               │
│   │   Feed   │      │   Hands   │      │ Rendering  │               │
│   └──────────┘      └───────────┘      └────────────┘               │
│        │                    │                   │                       │
│        ▼                    ▼                   ▼                       │
│   Video Frames        21 Landmarks       5000+ Particles               │
│                      Detection          Real-time Update             │
│                                                                     │
└────────────────────────────────────────────────────────────────────────┘
```

### Step-by-Step Process

| Step | Process | Description |
|:----:|---------|-------------|
| 1️⃣ | **Capture** | Webcam captures video frames |
| 2️⃣ | **Detect** | MediaPipe identifies 21 hand landmarks |
| 3️⃣ | **Analyze** | Determine gesture (open/closed hand) |
| 4️⃣ | **Calculate** | Apply forces to particles based on position |
| 5️⃣ | **Render** | Three.js updates display at 60fps |

---

## ⚙️ Technical Details

### Performance Metrics

| Metric | Value |
|--------|-------|
| 🎯 Particles | ~5000 |
| ⚡ FPS | 60 |
| 📷 Hand Tracking | ~30fps |
| 💾 Memory | ~50MB |
| 🌐 Latency | <100ms |

### Particle System Architecture

```
Particle {
  position: Vector3    // x, y, z coordinates
  velocity: Vector3   // movement direction
  acceleration: Vector3 // applied forces
  color: Color       // particle color
  size: Number       // particle size
}
```

---

## 🔧 Troubleshooting

| ❌ Issue | ✅ Solution |
|----------|-------------|
| **Camera not working** | Grant permissions / Use Chrome |
| **Low frame rate** | Close other apps / Better device |
| **Black screen** | Enable WebGL / Update drivers |
| **No hand detection** | Ensure good lighting / Face camera |
| **Particles not moving** | Wave your hand in front of camera |

---

## 🤝 Contributing

Contributions are welcome! Follow these steps:

```bash
# 1. Fork the repository

# 2. Clone your fork
git clone https://github.com/YOUR_USERNAME/3D-Mavi-Saturn-Interactive-Particles.git

# 3. Create feature branch
git checkout -b feature/amazing-feature

# 4. Make changes and commit
git add .
git commit -m 'Add amazing feature'

# 5. Push to your fork
git push origin feature/amazing-feature

# 6. Create Pull Request
```

---

## 📝 License

This project is licensed under the **MIT License**.

Copyright © 2024 [Logesh Kannan](https://github.com/logeshkannan19)

---

## 🙏 Acknowledgments

| | |
|:---|:---|
| [Three.js](https://threejs.org/) | 3D graphics library |
| [MediaPipe](https://google.github.io/mediapipe/) | Hand tracking solution |
| [Vercel](https://vercel.com/) | Hosting platform |

---

<div align="center">

---

💜 Thanks for checking out this project!

⭐ **Star** this repo if you found it useful

🍴 **Fork** to contribute

📤 **Share** with others

---

[Back to top](#-table-of-contents)

</div>