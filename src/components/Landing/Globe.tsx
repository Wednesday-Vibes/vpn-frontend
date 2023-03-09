import * as THREE from 'three';
import { useRef, useEffect } from 'react';
import styled from 'styled-components';

const GlobeContainer = styled.div`
    background-color: #edf0f7;
    width: 100%;
    min-height: 50rem;
`;

// THREE.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 800 / 600, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
// renderer.setSize(800, 600);

const geometry = new THREE.SphereGeometry(1, 32, 16);
const material = new THREE.MeshBasicMaterial({ color: 0x4a5468 });
const sphere = new THREE.Mesh(geometry, material);
sphere.scale.x = 2;
sphere.scale.y = 2;
sphere.scale.z = 2;
sphere.position.y = -1;
scene.add(sphere);

camera.position.set(0, 0, 3);

export type Connection = {
    fromCoords: [number, number];
    toCoords: [number, number];
};

type GlobeProps = {
    connections: Connection[];
};

export default ({ connections }: GlobeProps) => {
    // show connections between cities
    const globeContainerRef = useRef<HTMLDivElement>(null);

    const resizeCanvas = () => {
        if (globeContainerRef.current !== null) {
            camera.aspect = globeContainerRef.current.clientWidth / globeContainerRef.current.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(globeContainerRef.current.clientWidth, globeContainerRef.current.clientHeight);
            renderer.render(scene, camera);
        }
    };

    // animate rotation
    const tick = () => {
        window.requestAnimationFrame(() => {
            sphere.rotation.y += 0.1;
            renderer.render(scene, camera);
            // tick();
        });
    };

    useEffect(() => {
        if (globeContainerRef.current !== null) {
            globeContainerRef.current.appendChild(renderer.domElement);
            resizeCanvas();
            tick();
        }

        window.addEventListener('resize', () => {
            console.log('resizing');
            resizeCanvas();
        });
    }, []);

    return <GlobeContainer className="globe-container" ref={globeContainerRef} />;
};
