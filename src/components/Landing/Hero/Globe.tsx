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
const geometry = new THREE.SphereGeometry(15, 32, 16);
const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.set(0, 0, -3);

const renderer = new THREE.WebGLRenderer();
renderer.render(scene, camera);

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
        }
    }, []);

    return <Globe className="globe-container" ref={globeRef} />;
};
