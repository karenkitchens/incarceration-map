import logo from './logo.svg';
import './App.css';
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

const options = {
  title: {
    text: 'Example chart'
  },
    
  series: [{
    data: [[Date.UTC(2013,5,2),0.7695],
          [Date.UTC(2013,5,3),0.7648],
          ...
          [Date.UTC(2013,5,24),0.7623],]
  }]
}

function App() {
  return (
    <div className="App">
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={'stockChart'}
        options={options}
      />
        
    </div>
  );
}

export default App;
