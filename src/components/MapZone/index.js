import * as React from 'react';

class MapZone extends React.Component {
    constructor(props) {
        super(props);
    }

    

    render() {
        return (
            <path
                fill={this.props.color}
                stroke='#fff'
                stroke-width="0"
                stroke-opacity="1"
                style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1; opacity: 1;"
                d={this.props.d}
                onMouseOver={this.props.handleOnHover}
                onMouseOut={this.props.handleOnOut}
                onClick={this.props.handleOnClick}
                onMouseMove={this.props.handleOnMove}
            />
        );
    }
}

// you have to export your module to be able to import it in another place 
export default MapZone;