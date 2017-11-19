import React from 'react';
import { connect } from 'react-redux';
import {getAppData} from './actions';
import {getMapData} from './../../common/constants/actions/getMapData';
import {Map} from './../../components/Map';

const json = {"status":null,"statusMessage":null,"data":[{"id":1,"strana8":"ANO","strana30":"ANO 2011","mandatu":6,"procent":20.35,"hlasu":124445,"color":"#0ab5cc","nazevOblasti":"Hl. m. Praha"},{"id":2,"strana8":"ANO","strana30":"ANO 2011","mandatu":9,"procent":28.66,"hlasu":189371,"color":"#0ab5cc","nazevOblasti":"Středočeský"},{"id":3,"strana8":"ANO","strana30":"ANO 2011","mandatu":5,"procent":28.86,"hlasu":91012,"color":"#0ab5cc","nazevOblasti":"Jihočeský"},{"id":4,"strana8":"ANO","strana30":"ANO 2011","mandatu":5,"procent":30.98,"hlasu":84114,"color":"#0ab5cc","nazevOblasti":"Plzeňský"},{"id":5,"strana8":"ANO","strana30":"ANO 2011","mandatu":3,"procent":35.42,"hlasu":43268,"color":"#0ab5cc","nazevOblasti":"Karlovarský"},{"id":6,"strana8":"ANO","strana30":"ANO 2011","mandatu":7,"procent":37.55,"hlasu":127574,"color":"#0ab5cc","nazevOblasti":"Ústecký"},{"id":7,"strana8":"ANO","strana30":"ANO 2011","mandatu":4,"procent":29.83,"hlasu":62302,"color":"#0ab5cc","nazevOblasti":"Liberecký"},{"id":8,"strana8":"ANO","strana30":"ANO 2011","mandatu":5,"procent":31.77,"hlasu":88551,"color":"#0ab5cc","nazevOblasti":"Královéhradecký"},{"id":9,"strana8":"ANO","strana30":"ANO 2011","mandatu":4,"procent":30.81,"hlasu":79551,"color":"#0ab5cc","nazevOblasti":"Pardubický"},{"id":10,"strana8":"ANO","strana30":"ANO 2011","mandatu":4,"procent":28.63,"hlasu":75247,"color":"#0ab5cc","nazevOblasti":"Vysočina"},{"id":11,"strana8":"ANO","strana30":"ANO 2011","mandatu":7,"procent":27.4,"hlasu":159909,"color":"#0ab5cc","nazevOblasti":"Jihomoravský"},{"id":12,"strana8":"ANO","strana30":"ANO 2011","mandatu":5,"procent":31.39,"hlasu":95950,"color":"#0ab5cc","nazevOblasti":"Olomoucký"},{"id":13,"strana8":"ANO","strana30":"ANO 2011","mandatu":4,"procent":28.76,"hlasu":84750,"color":"#0ab5cc","nazevOblasti":"Zlínský"},{"id":14,"strana8":"ANO","strana30":"ANO 2011","mandatu":10,"procent":35.42,"hlasu":194069,"color":"#0ab5cc","nazevOblasti":"Moravskoslezský"}]};

console.log('json', json.data);

class App extends React.Component {
  constructor(props) {
    super(props);
    
  }

  componentWillMount() {
    console.log('montowanie'); // polaczenie z baza danych
     this.props.getApplicationData(this.props.sourceUrl);
  }

  render() {
    console.log('th', this.props.sourceUrl)
    return (
     <div className="app">
       <Map mapData={json} mapsCoordinates={json} />
     </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  global: {},
});

export const mapDispatchToProps = (dispatch) => ({
  getApplicationData(url) {
    dispatch(getAppData(url));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
