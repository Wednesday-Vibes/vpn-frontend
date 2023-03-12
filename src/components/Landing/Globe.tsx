import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import type { Connection } from '../../logic/types';

const GlobeContainer = styled.div`
    width: 100%;
    height: 100%;
    opacity: 50%;
    position: absolute;
`;

// THREE.js
type GlobeProps = {
    connections: Connection[];
};

export default ({ connections }: GlobeProps) => {
    // TODO: show connections between cities

    return (
        <GlobeContainer className="globe-container">
            <Canvas camera={{ position: [0, 0, -3] }}>
                <mesh scale={2} position-y={-1}>
                    <sphereGeometry />
                    <meshBasicMaterial color={0x4a5468} />
                </mesh>
            </Canvas>
        </GlobeContainer>
    );
};
