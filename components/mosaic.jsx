function Mosaic({ images, reverse }) {
    const mosaic = {
        display: 'flex',
        flexWrap: 'nowrap',
        alignItems: 'stretch',
        marginLeft: '-5px',
        marginRight: '-5px',
        flexDirection: reverse ? 'row-reverse' : 'row'
    };

    const mosaicCol = {
        position: 'relative',
        boxSizing: 'border-box'
    };

    const mosaicLeft = {
        width: '65%',
        paddingTop: '56.25%'
    };

    const mosaicRight = {
        width: '35%',
        display: 'flex',
        flexDirection: 'column'
    };

    const mosaicContainer = {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundSize: 'auto 100%',
        backgroundPosition: 'center'
    };

    const mosaicTopBottom = {
        height: '50%',
        backgroundSize: 'auto 100%',
        backgroundPosition: 'center'
    };

    return (
        <div style={mosaic}>
            <div style={{...mosaicCol, ...mosaicLeft}}>
                <div style={{...mosaicContainer, backgroundImage: `url('${images[0]}')`}}></div>
            </div>
            <div style={{...mosaicCol, ...mosaicRight}}>
                <div style={{...mosaicCol, ...mosaicTopBottom, backgroundImage: `url('${images[1]}')`}}></div>
                <div style={{...mosaicCol, ...mosaicTopBottom, backgroundImage: `url('${images[2]}')`}}></div>
            </div>
        </div>
    );
}