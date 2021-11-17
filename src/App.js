import './App.css';
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import highchartsMap from "highcharts/modules/map"
import proj4 from "proj4";
import mapDataCU from "@highcharts/map-collection/countries/cu/cu-all.geo.json";

highchartsMap(Highcharts);

if (typeof window !== "undefined") {
  window.proj4 = window.proj4 || proj4;
}
const mapOptions = {
  chart: {
    map: 'countries/cu/cu-all'
  },
  title: {
    text: 'Map Demo'
  },
  credits: {
      enabled: false
  },
  mapNavigation: {
    enabled: true
  },
tooltip: {
    headerFormat: '',
    pointFormat: '<b>{point.freq}</b><br><b>{point.keyword}</b>                      <br>lat: {point.lat}, lon: {point.lon}'
  },
  series: [{
    // Use the gb-all map with no data as a basemap
    name: 'Basemap',
    mapData: mapDataCU,
    borderColor: '#A0A0A0',
    nullColor: 'rgba(200, 200, 200, 0.3)',
    showInLegend: false
  }, {
    // Specify points using lat/lon
    type: 'mapbubble',
    name: 'Cities',
    color: '#4169E1',
    data: [{ z: 10, keyword: "Galway", lat: 53.27, lon: -9.25 }, 
           { z: 4, keyword: "Dublin", lat: 53.27, lon: -6.25 }],
    cursor: 'pointer',
    point: {
      events: {
        click: function() {
          console.log(this.keyword);
        }
      }
    }
  }]
}
function App() {
  return (
    <div className="App">
      <HighchartsReact
        constructorType ={'mapChart'}
        highcharts={Highcharts}
        options={mapOptions}
      />     
    </div>
  );
}

export default App;
