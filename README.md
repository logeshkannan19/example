# 3D Mavi Saturn Interactive Particles

A visually stunning browser-based 3D particle simulation of Saturn with hand-tracking interaction.

## Description

This project renders a 3D visualization of a blue-hued Saturn and its ring system using **Three.js**. It integrates **MediaPipe Hands** to allow users to interact with the particles via their webcam. 

- **Open Hand:** Attracts and scatters the particles towards your hand's position in 3D space, creating an explosive but controlled effect.
- **Closed Fist:** Rotating your fist allows you to rotate the planet and its rings manually.

## Technologies Used
- HTML5 / CSS3 (Vanilla)
- [Three.js](https://threejs.org/) for 3D graphics rendering
- [MediaPipe Hands](https://google.github.io/mediapipe/solutions/hands) for real-time hand tracking

## Setup Instructions
1. Clone this repository to your local machine.
2. Run a local web server (e.g. `npx serve .` or use the VS Code Live Server extension).
3. Allow camera permissions when prompted in your browser.
4. Interact with the particles with your hand!

## Live Demo
[https://mavi-saturn.vercel.app](https://mavi-saturn.vercel.app)
