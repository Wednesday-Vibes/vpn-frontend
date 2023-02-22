import React, { useEffect, useRef } from 'react';
import DeckGL from '@deck.gl/react/typed';
import type { DeckGLRef } from '@deck.gl/react/typed';
import StaticMap from 'react-map-gl';
import { ScatterplotLayer } from '@deck.gl/layers/typed';
import { Connection } from '../../../logic/types';

interface Props {
    connection: Connection;
}

const viteMapToken = import.meta.env.VITE_MAPBOX_TOKEN;

console.log(viteMapToken);

const MapDeckGL: React.FC<Props> = ({ connection }) => {
    const deckRef = useRef<DeckGLRef>(null);

    useEffect(() => {
        deckRef.current?.deck?.setProps({
            initialViewState: {
                longitude: connection.longitude,
                latitude: connection.latitude,
                zoom: 13,
                pitch: 0,
                bearing: 0
            }
        });
    }, [connection]);

    const layers = [
        new ScatterplotLayer({
            id: 'scatterplot-layer',
            data: [
                {
                    position: [connection.longitude, connection.latitude],
                    color: [255, 0, 0]
                }
            ],
            getPosition: (d) => d.position,
            getRadius: 100,
            getFillColor: (d) => d.color,
            pickable: true
        })
    ];

    return (
        <DeckGL
            ref={deckRef}
            initialViewState={{
                longitude: connection.longitude,
                latitude: connection.latitude,
                zoom: 13,
                pitch: 0,
                bearing: 0
            }}
            controller={true}
            layers={layers}
        >
            <StaticMap
                mapboxAccessToken={viteMapToken}
                mapStyle="mapbox://styles/mapbox/dark-v10"
            />
        </DeckGL>
    );
};

export default MapDeckGL;
