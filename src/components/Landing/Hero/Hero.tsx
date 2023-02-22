import Globe from './Globe';

export default () => {
    return (
        <div className="hero">
            <Globe
                connections={[
                    {
                        fromCoords: [12.1234134, 142.2342342],
                        toCoords: [456.234234234, 234.6424323]
                    }
                ]}
            />
        </div>
    );
};
