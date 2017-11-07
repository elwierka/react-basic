import * as React from 'react';

class MapZone extends React.Component {
    constructor(props) {
        super(props);
    }

    

    render() {
        return (
            <path
                fill={this.props.color}
                stroke='#000'
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