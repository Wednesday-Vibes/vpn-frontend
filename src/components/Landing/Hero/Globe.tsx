import * as THREE from 'three';
import { useRef, useEffect } from 'react';
import styled from 'styled-components';

const Globe = styled.div`
    background-color: black;
    width: 100%;
    min-height: 50rem;
`;

// THREE.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 800 / 600, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(800, 600);

const geometry = new THREE.SphereGeometry(1, 32, 16);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

camera.position.set(0, 0, 3);

const tick = () => {
    window.requestAnimationFrame(() => {
        sphere.rotation.y += 0.1;
        renderer.render(scene, camera);
        tick();
    });
};

export type Connection = {
    fromCoords: [number, number];
    toCoords: [number, number];
};

type GlobeProps = {
    connections: Connection[];
};

export default ({ connections }: GlobeProps) => {
    // show connections between cities
    const globeRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (globeRef.current !== null) {
            globeRef.current.appendChild(renderer.domElement);
            tick();
        }
    }, []);

    return <Globe className="globe-container" ref={globeRef} />;
};
