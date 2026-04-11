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
| [💻 Development](#-development) | Development setup |
| [📁 Project Structure](#-project-structure) | File organization |
| [🔄 How It Works](#-how-it-works) | Technical workflow |
| [⚙️ Technical Details](#-technical-details) | Specifications |
| [🎨 Customization](#-customization) | Configuration options |
| [🔧 Troubleshooting](#-troubleshooting) | Common issues |
| [❓ FAQ](#-faq) | Frequently asked questions |
| [🤝 Contributing](#-contributing) | How to contribute |
| [📝 Changelog](#-changelog) | Version history |
| [🔒 Security](#-security) | Security policy |
| [📝 License](#-license) | MIT License |
| [📧 Contact](#-contact) | Get in touch |

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
| 🎨 **Customizable** | Adjust colors and particle count |
| 📱 **Responsive** | Adapts to screen size |

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
| ✓ | Ring System | Saturn-like rings |
| ✓ | WebGL Acceleration | GPU-powered graphics |
| ✓ | Responsive Canvas | Auto-resize support |

### Upcoming Features

| 🚧 | Feature | Status |
|:---:|---------|--------|
| 🌈 | Color Customization | Planned |
| 📱 | Mobile Touch Support | Planned |
| 🎬 | Motion Blur Effects | Planned |
| 💫 | Bloom Post-Processing | Planned |
| 🔊 | Sound Effects | Planned |
| 📸 | Screenshot Feature | Planned |
| 🎚️ | Particle Slider | Planned |
| 🌙 | Dark/Light Mode | Planned |

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

### Quick Start

```bash
# Clone the repository
git clone https://github.com/logeshkannan19/3D-Mavi-Saturn-Interactive-Particles.git

# Navigate to project
cd 3D-Mavi-Saturn-Interactive-Particles

# Start local server
npx serve .
```

> 🔗 **Open** `http://localhost:3000` in your browser  
> 📷 **Allow** camera access when prompted  
> 👋 **Wave** your hand to interact!

---

## 💻 Development

### Local Development Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

### Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | 3000 | Development server port |
| `NODE_ENV` | development | Node environment |

---

## 📁 Project Structure

```
Saturn-Particle-Nexus/
├── 📄 index.html          # Main HTML entry point
├── 📄 script.js           # Three.js + MediaPipe logic
├── 📄 style.css          # CSS styling
├── 📄 README.md          # Documentation
├── 📄 LICENSE            # MIT License
├── 📄 .gitignore         # Git ignore rules
└── 📄 package.json      # npm package config
```

| File | Description | Lines |
|------|-------------|-------|
| index.html | Canvas + video feed | ~20 |
| script.js | Particle system + tracking | ~200 |
| style.css | Visual styling | ~50 |

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

### Code Flow

```javascript
// 1. Initialize Three.js scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(...);
const renderer = new THREE.WebGLRenderer();

// 2. Create particle system
const particles = new THREE.Points(geometry, material);

// 3. Initialize MediaPipe
const hands = new Hands({locateFile: ...});
hands.onResults(onResults);

// 4. Update loop
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
```

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

### Browser Support

| Browser | Status | Notes |
|---------|--------|-------|
| Chrome | ✅ Supported | Recommended |
| Firefox | ✅ Supported | Full support |
| Edge | ✅ Supported | Full support |
| Safari | ⚠️ Partial | May need permissions |
| Opera | ✅ Supported | Full support |

### Device Requirements

| Requirement | Minimum | Recommended |
|-------------|----------|-------------|
| RAM | 4GB | 8GB+ |
| Webcam | 720p | 1080p |
| CPU | Dual-core | Quad-core+ |

---

## 🎨 Customization

### Configuration Options

| Option | Default | Description |
|--------|---------|-------------|
| `particleCount` | 5000 | Number of particles |
| `particleSize` | 2 | Particle size |
| `planetColor` | #0066ff | Saturn color |
| `ringColor` | #00d9ff | Ring color |
| `background` | #0a0a1a | Background color |

### Modifying via Code

```javascript
// In script.js
const CONFIG = {
  particleCount: 5000,
  particleSize: 2,
  planetColor: 0x0066ff,
  ringColor: 0x00d9ff,
  background: 0x0a0a1a
};
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
| **Permission denied** | Check browser settings |
| **WebGL not supported** | Try different browser |

---

## ❓ FAQ

### Frequently Asked Questions

**Q: Why is my camera not working?**
> A: Make sure you've granted camera permissions in your browser settings. Try using Chrome for best compatibility.

**Q: How can I improve frame rate?**
> A: Close other applications using the webcam, reduce browser tabs, and ensure you're using a modern device.

**Q: Can I use this on mobile?**
> A: Currently, this requires a webcam. Mobile touch support is planned for future updates.

**Q: How do I change the particle count?**
> A: Modify the `particleCount` value in `script.js`.

**Q: Is this project free to use?**
> A: Yes, it's licensed under MIT. You can use it for personal and commercial projects.

**Q: Does it work without internet?**
> A: No, it requires internet for CDN resources (Three.js, MediaPipe).

**Q: Can I customize colors?**
> A: Yes, modify the color values in `script.js` CONFIG object.

**Q: Why are particles not attracted to my hand?**
> A: Ensure you're in good lighting and facing the camera. Make an open hand gesture.

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

### Contribution Guidelines

| Guideline | Description |
|-----------|-------------|
| 📝 Code Style | Follow existing code style |
| 🧪 Testing | Test your changes |
| 📚 Documentation | Update docs if needed |
| ✅ Checks | Run lint before PR |

---

## 📝 Changelog

### Version History

| Version | Date | Changes |
|---------|------|---------|
| v1.0.0 | Current | Initial release |
| v0.9.0 | Beta | Beta testing |
| v0.5.0 | Alpha | Initial development |

### Recent Updates

| Date | Change |
|------|--------|
| 2024 | Initial release |
| Added hand tracking | Real-time gesture recognition |
| Added particle system | 5000+ interactive particles |
| Added rotation | Fist-based rotation |

---

## 🔒 Security

### Security Policy

If you find a security vulnerability, please report it responsibly.

**Reporting Guidelines:**

1. 📧 Email: Contact maintainer
2. 📝 Provide details
3. ⏳ Allow time for response
4. 🚫 Don't disclose publicly

---

## 📝 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2024 Logesh Kannan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"),
```

Full license available in [LICENSE](LICENSE) file.

---

## 🙏 Acknowledgments

| | |
|:---|:---|
| [Three.js](https://threejs.org/) | 3D graphics library |
| [MediaPipe](https://google.github.io/mediapipe/) | Hand tracking solution |
| [Vercel](https://vercel.com/) | Hosting platform |

---

## 📧 Contact

| | |
|:---|:---|
| 📧 Email | Available via GitHub |
| 💻 GitHub | [logeshkannan19](https://github.com/logeshkannan19) |
| 🐛 Issues | [Report Bug](https://github.com/logeshkannan19/3D-Mavi-Saturn-Interactive-Particles/issues) |

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