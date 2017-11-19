import * as React from 'react';
import MapZone from './../MapZone';

// it could be moved to seperated file e.g. in the "common" directory and names config file ( config.js )
const mapWrapperClassName = 'map__wrapper';  // I'm proposing english class name instead of volby-ps2017-vysledky

export class Map extends React.Component {
    constructor(props) {
        super(props);

        // binding methods
        this.getCoordinates = this.getCoordinates.bind(this);
        this.getResults = this.getResults.bind(this);
        this.mapScoreToMapZones = this.mapScoreToMapZones.bind(this);

        this.state = {
            scores: JSON.parse(this.props.defaultData),
            updateTime: this.props.updateTime,
            shouldUpdate: this.props.shouldUpdate
        };
    }

    getCoordinates(areaId) {
        const map = this.coordinates.filter(area => area.id === areaId);
        return map[0].coordinate;
    }

    getResults(resultId) {
        const result = this.state.scores.filter(item => item.id === resultId);
        return result[0];
    }

    mapScoreToMapZones(score) {
        return (
            <MapZone key={score.id}
                d={this.getCoordinates(score.id)}
                color={score.color}
                handleOnHover={() => this.onHover(score.id)}
                handleOnOut={() => this.onOut()}
                handleOnClick={() => this.onClick(score.id)}
                handleOnMove={(event) => this.onMove(event || window.event)}
            />
        );
    }

    onHover(id) {
        const coordinateId = this.getResults(id);
        let info = `<h2>${coordinateId.nazevOblasti} kraj</h2>`;
        if (coordinateId.procent > 0) {
            info += `<b>${coordinateId.strana8}</b> / ${coordinateId.hlasu} hlasů</div>`;
        }

        if (this.info !== undefined) {
            this.info.style.display = 'inline-block';
            this.info.innerHTML = info;
        }
    }



    render() {
        console.log('url', this.props.sourceUrl);
        return (
           <div className={mapWrapperClassName}>
                <svg 
                    height="350px" 
                    id="Vrstva_1" 
                    width="600px" 
                    version="1.1" 
                    viewBox="0 0 600 350" 
                    x="0px" 
                    y="0px"
                    xmlSpace="preserve">

               {/*      {this.state.scores.map( (score) => this.mapScoreToMapZones(score)) }*/}
               dddd
                </svg>

                <div className="info-box" ref={(div) => this.info = div}></div>
                
            </div>
        )
    }
}

export default Map;