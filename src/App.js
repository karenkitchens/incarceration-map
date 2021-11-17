import './App.css';
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import highchartsMap from "highcharts/modules/map"
import proj4 from "proj4";
import mapDataCU from "@highcharts/map-collection/countries/cu/cu-all.geo.json";

if (typeof window !== "undefined") {
  window.proj4 = window.proj4 || proj4;
}

let data = [
  ['cu-ho', 0],
  ['cu-ar', 1],
  ['cu-ma', 2],
  ['cu-vc', 3],
  ['cu-5812', 4],
  ['cu-ij', 5],
  ['cu-ss', 6],
  ['cu-ca', 7],
  ['cu-cm', 8],
  ['cu-ch', 9],
  ['cu-cf', 10],
  ['cu-gu', 11],
  ['cu-gr', 12],
  ['cu-lt', 13],
  ['cu-sc', 14],
  ['cu-mq', 15],
  ['cu-pr', 16]
];

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
    enabled: true,
    buttonOptions: {
        verticalAlign: 'bottom'
    }
  },

  colorAxis: {
      min: 0
  },
  // tooltip: {
  //   headerFormat: '',
  //   pointFormat: '<b>{point.freq}</b><br><b>{point.keyword}</b>                      <br>lat: {point.lat}, lon: {point.lon}'
  // },
  series: [{
    mapData: mapDataCU,
    data: data,
    name: 'Random data',
    states: {
        hover: {
            color: '#BADA55'
        }
    },
    dataLabels: {
        enabled: true,
        format: '{point.name}'
    }
  }]
}

highchartsMap(Highcharts);

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
