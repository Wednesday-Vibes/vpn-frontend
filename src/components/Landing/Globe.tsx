import styled from 'styled-components';
import type { Connection } from '../../logic/types';
import Globe, { GlobeMethods } from 'react-globe.gl';
import { useEffect, useRef, useState } from 'react';

const GlobeContainer = styled.div`
    display: none;

    @media (min-width: 1120px) {
        display: block;
        width: min(500px, 100%);
        height: 100%;
        position: absolute;
        right: 0;
    }
`;

type GlobeProps = {
    connections?: [Connection, Connection];
};

export default ({ connections }: GlobeProps) => {
    const [globeWidth, setGlobeWidth] = useState<number>();
    const [globeHeight, setGlobeHeight] = useState<number>();
    const globeContainerRef = useRef<HTMLInputElement>(null);
    const globeRef = useRef<GlobeMethods>();

    const resizeGlobe = () => {
        if (globeContainerRef.current) {
            setGlobeWidth(globeContainerRef.current.offsetWidth);
            setGlobeHeight(globeContainerRef.current.offsetHeight);
        }
    };

    useEffect(() => {
        // set initial globe size
        resizeGlobe();
        // resize globe on window resize
        window.addEventListener('resize', () => {
            resizeGlobe();
        });

        if (globeRef.current) {
            globeRef.current.controls().autoRotate = true;
            globeRef.current.controls().autoRotateSpeed = -2;
            globeRef.current.controls().enabled = false;
        }
    }, []);

    // Generate random data
    const N = 20;
    const arcsData = [...Array(N).keys()].map(() => ({
        startLat: (Math.random() - 0.5) * 180,
        startLng: (Math.random() - 0.5) * 360,
        endLat: (Math.random() - 0.5) * 180,
        endLng: (Math.random() - 0.5) * 360,
        color: 'white'
    }));

    return (
        <GlobeContainer className="globe-container" ref={globeContainerRef}>
            <Globe
                ref={globeRef}
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                arcsData={arcsData}
                arcColor={'color'}
                arcDashLength={() => Math.random()}
                arcDashGap={() => Math.random()}
                arcDashAnimateTime={() => Math.random() * 1000 + 3000}
                width={globeWidth}
                height={globeHeight}
                backgroundColor="#00000000"
                atmosphereColor="black"
                enablePointerInteraction={false}
                // showGlobe={false}
            />
        </GlobeContainer>
    );
};
