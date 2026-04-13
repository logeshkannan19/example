let scene, camera, renderer, saturn, rings, stars, titan;
let handGroup, handSkeleton, handPoints;
let lastHandPos = null;
let currentHandCenter = new THREE.Vector3(0, 0, 0); 
let isExploded = false;
let explosionFactor = 0;
let shakeIntensity = 0;
let autoRotate = true;
let bloomEffect = false;

let saturnOrigPos = [];
let ringOrigPos = [];
let saturnRandomDirs = [];
let ringRandomDirs = [];

let particleCount = 5000;
let planetColor = 0x0088ff;
let ringColor = 0x00ffff;
let particleColor = 0x00aaff;

const planetPresets = {
    saturn: { planet: 0x0088ff, ring: 0x00ffff, particle: 0x00aaff },
    jupiter: { planet: 0xd4a574, ring: 0xc9956c, particle: 0xe8c49a },
    neptune: { planet: 0x4169e1, ring: 0x6495ed, particle: 0x87ceeb },
    uranus: { planet: 0x40e0d0, ring: 0x7fffd4, particle: 0xafeeee }
};

let bloomComposer, renderScene, bloomPass;
let audioContext, gainNode;

function initThree() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 12; 
    scene.add(camera);

    renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    document.body.appendChild(renderer.domElement);

    createSaturn();
    createRings();
    createStars();
    createTitan();
    createHandVisualization();
    setupLighting();
    setupControls();
    animate();
}

function createSaturn() {
    if (saturn) scene.remove(saturn);
    
    const saturnGeo = new THREE.SphereGeometry(4, 64, 64);
    const saturnMat = new THREE.PointsMaterial({ color: planetColor, size: 0.04 });
    saturn = new THREE.Points(saturnGeo, saturnMat);
    scene.add(saturn);

    saturnOrigPos = [];
    saturnRandomDirs = [];
    const sPos = saturn.geometry.attributes.position.array;
    for(let i=0; i<sPos.length; i+=3) {
        saturnOrigPos.push(sPos[i], sPos[i+1], sPos[i+2]);
        saturnRandomDirs.push((Math.random() - 0.5) * 3, (Math.random() - 0.5) * 3, (Math.random() - 0.5) * 3);
    }
}

function createRings() {
    if (rings) scene.remove(rings);
    
    const ringGeo = new THREE.BufferGeometry();
    const rPositions = new Float32Array(particleCount * 3);
    for(let i=0; i<particleCount; i++) {
        const r = 6.5 + Math.random() * 3.5;
        const a = Math.random() * Math.PI * 2;
        const x = Math.cos(a) * r;
        const y = (Math.random()-0.5) * 0.1;
        const z = Math.sin(a) * r;
        rPositions[i*3] = x;
        rPositions[i*3+1] = y;
        rPositions[i*3+2] = z;
    }
    ringGeo.setAttribute('position', new THREE.BufferAttribute(rPositions, 3));
    rings = new THREE.Points(ringGeo, new THREE.PointsMaterial({ color: ringColor, size: 0.025, transparent: true, opacity: 0.6 }));
    rings.rotation.x = Math.PI / 3;
    scene.add(rings);

    ringOrigPos = [];
    ringRandomDirs = [];
    const rPos = rings.geometry.attributes.position.array;
    for(let i=0; i<rPos.length; i+=3) {
        ringOrigPos.push(rPos[i], rPos[i+1], rPos[i+2]);
        ringRandomDirs.push((Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2);
    }
}

function createStars() {
    if (stars) scene.remove(stars);
    
    const starGeo = new THREE.BufferGeometry();
    const starCount = 4000;
    const starPos = new Float32Array(starCount * 3);
    const starSizes = new Float32Array(starCount);
    
    for(let i=0; i<starCount; i++) {
        starPos[i*3] = (Math.random()-0.5) * 1000;
        starPos[i*3+1] = (Math.random()-0.5) * 1000;
        starPos[i*3+2] = (Math.random()-0.5) * 1000;
        starSizes[i] = Math.random() * 0.5 + 0.2;
    }
    
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    starGeo.setAttribute('size', new THREE.BufferAttribute(starSizes, 1));
    
    stars = new THREE.Points(starGeo, new THREE.PointsMaterial({
        color: 0xffffff, 
        size: 0.4,
        transparent: true,
        opacity: 0.8
    }));
    scene.add(stars);
}

function createTitan() {
    if (titan) scene.remove(titan);
    
    const titanGeo = new THREE.SphereGeometry(0.3, 16, 16);
    const titanMat = new THREE.MeshBasicMaterial({ color: 0xffaa44 });
    titan = new THREE.Mesh(titanGeo, titanMat);
    titan.position.set(10, 2, 5);
    scene.add(titan);
}

function createHandVisualization() {
    handGroup = new THREE.Group();
    const skeletonGeo = new THREE.BufferGeometry();
    const skeletonMat = new THREE.LineBasicMaterial({ color: 0x00aaff, transparent: true, opacity: 0.8 });

    handSkeleton = new THREE.LineSegments(skeletonGeo, skeletonMat);
    const pointsGeo = new THREE.BufferGeometry();
    const pointsMat = new THREE.PointsMaterial({ color: 0x00ffff, size: 0.08 });
    handPoints = new THREE.Points(pointsGeo, pointsMat);
    handGroup.add(handSkeleton);
    handGroup.add(handPoints);
    handGroup.position.set(0, 0, -10); 
    camera.add(handGroup);
    scene.add(new THREE.AmbientLight(0xffffff, 1));
}

function setupLighting() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0x00ffff, 1, 100);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);
}

function setupControls() {
    const panel = document.getElementById('control-panel');
    document.querySelector('.panel-header').addEventListener('click', () => {
        panel.classList.toggle('collapsed');
    });

    document.getElementById('planet-preset').addEventListener('change', (e) => {
        const preset = planetPresets[e.target.value];
        if (preset) {
            planetColor = preset.planet;
            ringColor = preset.ring;
            particleColor = preset.particle;
            document.getElementById('planet-color').value = '#' + preset.planet.toString(16).padStart(6, '0');
            document.getElementById('ring-color').value = '#' + preset.ring.toString(16).padStart(6, '0');
            document.getElementById('particle-color').value = '#' + preset.particle.toString(16).padStart(6, '0');
            updatePlanetColors();
        }
    });

    document.getElementById('planet-color').addEventListener('input', (e) => {
        planetColor = parseInt(e.target.value.replace('#', ''), 16);
        updatePlanetColors();
    });

    document.getElementById('ring-color').addEventListener('input', (e) => {
        ringColor = parseInt(e.target.value.replace('#', ''), 16);
        if (rings) rings.material.color.setHex(ringColor);
    });

    document.getElementById('particle-color').addEventListener('input', (e) => {
        particleColor = parseInt(e.target.value.replace('#', ''), 16);
    });

    document.getElementById('particle-count').addEventListener('input', (e) => {
        particleCount = parseInt(e.target.value);
        document.getElementById('particle-count-val').textContent = particleCount;
        createRings();
    });

    document.getElementById('ring-tilt').addEventListener('input', (e) => {
        const tilt = parseInt(e.target.value);
        document.getElementById('ring-tilt-val').textContent = tilt + '°';
        if (rings) rings.rotation.x = (tilt * Math.PI) / 180;
    });

    document.getElementById('bloom-toggle').addEventListener('change', (e) => {
        bloomEffect = e.target.checked;
    });

    document.getElementById('sound-toggle').addEventListener('change', (e) => {
        if (e.target.checked) initAudio();
        else if (audioContext) audioContext.close();
    });

    document.getElementById('perf-mode').addEventListener('change', (e) => {
        if (e.target.checked) {
            renderer.setPixelRatio(1);
            if (stars) stars.visible = false;
        } else {
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            if (stars) stars.visible = true;
        }
    });

    document.getElementById('theme-toggle').addEventListener('change', (e) => {
        document.body.classList.toggle('light-mode', e.target.checked);
    });

    document.getElementById('screenshot-btn').addEventListener('click', takeScreenshot);
    document.getElementById('reset-btn').addEventListener('click', resetView);
    document.getElementById('help-btn').addEventListener('click', () => {
        document.getElementById('help-overlay').classList.add('visible');
    });
    document.getElementById('close-help').addEventListener('click', () => {
        document.getElementById('help-overlay').classList.remove('visible');
    });

    setupKeyboardControls();
}

function updatePlanetColors() {
    if (saturn) saturn.material.color.setHex(planetColor);
    if (rings) rings.material.color.setHex(ringColor);
}

function setupKeyboardControls() {
    document.addEventListener('keydown', (e) => {
        switch(e.key.toLowerCase()) {
            case ' ':
                autoRotate = !autoRotate;
                break;
            case 's':
                takeScreenshot();
                break;
            case 'h':
                document.getElementById('help-overlay').classList.toggle('visible');
                break;
            case 'd':
                document.getElementById('theme-toggle').click();
                break;
            case 'b':
                document.getElementById('bloom-toggle').click();
                break;
            case 'r':
                resetView();
                break;
            case '1':
                document.getElementById('planet-preset').value = 'saturn';
                document.getElementById('planet-preset').dispatchEvent(new Event('change'));
                break;
            case '2':
                document.getElementById('planet-preset').value = 'jupiter';
                document.getElementById('planet-preset').dispatchEvent(new Event('change'));
                break;
            case '3':
                document.getElementById('planet-preset').value = 'neptune';
                document.getElementById('planet-preset').dispatchEvent(new Event('change'));
                break;
            case '4':
                document.getElementById('planet-preset').value = 'uranus';
                document.getElementById('planet-preset').dispatchEvent(new Event('change'));
                break;
        }
    });
}

function takeScreenshot() {
    renderer.render(scene, camera);
    const link = document.createElement('a');
    link.download = 'saturn-particle-nexus.png';
    link.href = renderer.domElement.toDataURL('image/png');
    link.click();
    playSound(800, 0.1);
}

function resetView() {
    camera.position.set(0, 0, 12);
    camera.rotation.set(0, 0, 0);
    isExploded = false;
    explosionFactor = 0;
    if (saturn) saturn.rotation.set(0, 0, 0);
    if (rings) rings.rotation.set(Math.PI/3, 0, 0);
    updateExplosion();
    playSound(400, 0.15);
}

function initAudio() {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    gainNode = audioContext.createGain();
    gainNode.connect(audioContext.destination);
    gainNode.gain.value = 0.1;
}

function playSound(freq, duration) {
    if (!audioContext) return;
    if (audioContext.state === 'suspended') audioContext.resume();
    
    const osc = audioContext.createOscillator();
    const env = audioContext.createGain();
    
    osc.connect(env);
    env.connect(gainNode);
    
    osc.frequency.value = freq;
    osc.type = 'sine';
    
    env.gain.setValueAtTime(0.3, audioContext.currentTime);
    env.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
    
    osc.start();
    osc.stop(audioContext.currentTime + duration);
}

function isHandFist(landmarks) {
    const tips = [8, 12, 16, 20];
    const joints = [6, 10, 14, 18];
    let closedCount = 0;
    for(let i=0; i<4; i++) {
        if(landmarks[tips[i]].y > landmarks[joints[i]].y) closedCount++;
    }
    return closedCount >= 3;
}

function updateExplosion() {
    if(!saturn || !rings) return;
    const saturnAttr = saturn.geometry.attributes.position;
    const ringAttr = rings.geometry.attributes.position;

    const targetFactor = isExploded ? 8.0 : 0;
    explosionFactor = THREE.MathUtils.lerp(explosionFactor, targetFactor, isExploded ? 0.04 : 0.18);

    let attractionVector = new THREE.Vector3();
    if (isExploded) {
        attractionVector.copy(currentHandCenter);
        handGroup.localToWorld(attractionVector);
    }

    for(let i=0; i<saturnAttr.count; i++) {
        const i3 = i * 3;
        let x = saturnOrigPos[i3] + saturnRandomDirs[i3] * explosionFactor;
        let y = saturnOrigPos[i3+1] + saturnRandomDirs[i3+1] * explosionFactor;
        let z = saturnOrigPos[i3+2] + saturnRandomDirs[i3+2] * explosionFactor;

        if (isExploded) {
            x = THREE.MathUtils.lerp(x, attractionVector.x, 0.08);
            y = THREE.MathUtils.lerp(y, attractionVector.y, 0.08);
            z = THREE.MathUtils.lerp(z, attractionVector.z, 0.08);
        }

        saturnAttr.array[i3] = x;
        saturnAttr.array[i3+1] = y;
        saturnAttr.array[i3+2] = z;
    }
    saturnAttr.needsUpdate = true;

    for(let i=0; i<ringAttr.count; i++) {
        const i3 = i * 3;
        let x = ringOrigPos[i3] + ringRandomDirs[i3] * explosionFactor;
        let y = ringOrigPos[i3+1] + ringRandomDirs[i3+1] * explosionFactor;
        let z = ringOrigPos[i3+2] + ringRandomDirs[i3+2] * explosionFactor;

        if (isExploded) {
            x = THREE.MathUtils.lerp(x, attractionVector.x, 0.06);
            y = THREE.MathUtils.lerp(y, attractionVector.y, 0.06);
            z = THREE.MathUtils.lerp(z, attractionVector.z, 0.06);
        }

        ringAttr.array[i3] = x;
        ringAttr.array[i3+1] = y;
        ringAttr.array[i3+2] = z;
    }
    ringAttr.needsUpdate = true;

    if (shakeIntensity > 0.02) {
        camera.position.x += (Math.random() - 0.5) * shakeIntensity;
        camera.position.y += (Math.random() - 0.5) * shakeIntensity;
        shakeIntensity *= 0.9;
    } else {
        camera.position.x = THREE.MathUtils.lerp(camera.position.x, 0, 0.1);
        camera.position.y = THREE.MathUtils.lerp(camera.position.y, 0, 0.1);
    }
}

let time = 0;
function animate() {
    requestAnimationFrame(animate);
    time += 0.01;
    
    if (stars) {
        stars.rotation.y += 0.0001;
    }
    
    if (titan) {
        const t = time * 0.5;
        titan.position.x = Math.cos(t) * 12;
        titan.position.z = Math.sin(t) * 12;
        titan.position.y = Math.sin(t * 2) * 2;
    }
    
    updateExplosion();
    
    if (autoRotate && !isExploded && !lastHandPos && saturn && rings) {
        saturn.rotation.y += 0.002;
        rings.rotation.z += 0.001;
    }
    
    renderer.render(scene, camera);
}

async function startApp() {
    initThree();

    const videoElement = document.getElementById('input-video');
    const loadingMsg = document.getElementById('loading-msg');

    const hands = new Hands({
        locateFile: (file) => {
            return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
        }
    });

    hands.setOptions({
        maxNumHands: 1,
        modelComplexity: 1,
        minDetectionConfidence: 0.7,
        minTrackingConfidence: 0.7
    });

    const handConnections = [
        [0,1],[1,2],[2,3],[3,4], [0,5],[5,6],[6,7],[7,8],
        [0,9],[9,10],[10,11],[11,12], [0,13],[13,14],[14,15],[15,16],
        [0,17],[17,18],[18,19],[19,20], [5,9],[9,13],[13,17]
    ];

    hands.onResults((results) => {
        if (loadingMsg) loadingMsg.style.display = 'none';

        if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
            const landmarks = results.multiHandLandmarks[0];
            const positions = [];
            const linePositions = [];

            currentHandCenter.set(
                ((1 - landmarks[9].x) - 0.5) * 15,
                -(landmarks[9].y - 0.5) * 10,
                0
            );

            landmarks.forEach(lm => {
                const x = ((1 - lm.x) - 0.5) * 15; 
                const y = -(lm.y - 0.5) * 10;
                const z = 0; 
                positions.push(x, y, z);
            });

            handConnections.forEach(([start, end]) => {
                linePositions.push(positions[start*3], positions[start*3+1], positions[start*3+2]);
                linePositions.push(positions[end*3], positions[end*3+1], positions[end*3+2]);
            });

            if(handPoints) handPoints.geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
            if(handSkeleton) handSkeleton.geometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));

            const isFist = isHandFist(landmarks);
            const thumbTip = landmarks[4];
            const indexTip = landmarks[8];

            const zoomDist = Math.hypot(thumbTip.x - indexTip.x, thumbTip.y - indexTip.y);
            const targetZ = 35 - (zoomDist * 110); 
            camera.position.z = THREE.MathUtils.lerp(camera.position.z, Math.max(5, Math.min(targetZ, 60)), 0.1);

            if (isFist) {
                isExploded = false;
                if (lastHandPos) {
                    const dx = (1 - indexTip.x) - (1 - lastHandPos.x);
                    const dy = indexTip.y - lastHandPos.y;
                    saturn.rotation.y += dx * 7;
                    saturn.rotation.x += dy * 7;
                    rings.rotation.y += dx * 7;
                    rings.rotation.x += dy * 7;
                }
                lastHandPos = indexTip;
            } else {
                isExploded = true;
                lastHandPos = null;
            }
            if(handGroup) handGroup.visible = true;
        } else {
            if(handGroup) handGroup.visible = false;
            lastHandPos = null;
            isExploded = false;
        }
    });

    if (typeof Camera !== 'undefined') {
        const cameraProvider = new Camera(videoElement, {
            onFrame: async () => { await hands.send({image: videoElement}); },
            width: 640, height: 480
        });
        cameraProvider.start();
    } else {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: { width: 640, height: 480 } });
            videoElement.srcObject = stream;
            videoElement.onloadedmetadata = () => {
                videoElement.play();
                const processFrame = async () => {
                    await hands.send({image: videoElement});
                    requestAnimationFrame(processFrame);
                };
                processFrame();
            };
        } catch (err) {
            if(loadingMsg) loadingMsg.innerText = "Camera access denied. Please allow camera access.";
        }
    }
}

window.onload = startApp;

window.addEventListener('resize', () => {
    if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
});

// Touch support
let touchStartX = 0;
let touchStartY = 0;

document.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    }
});

document.addEventListener('touchmove', (e) => {
    if (e.touches.length === 1 && saturn && rings) {
        const deltaX = (e.touches[0].clientX - touchStartX) * 0.01;
        const deltaY = (e.touches[0].clientY - touchStartY) * 0.01;
        
        saturn.rotation.y += deltaX;
        saturn.rotation.x += deltaY;
        rings.rotation.y += deltaX;
        
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    } else if (e.touches.length === 2) {
        e.preventDefault();
    }
}, { passive: false });