import React from 'react';
import { useSelector } from 'react-redux';
import Weather from './weather'

function Forecast(props) {
  // const weather = useSelector(state => state.weather.forecast);
  // const weatherTwo = useSelector(state => state.weatherTwo.forcast);

  return (
    
    <div className="testWeather">
      
      <div className="weatherOne">
        <h1>Forecast Destination 1</h1>
        {/* <p>{e.city}</p> */} */}
        <p>{props.e.valid_date}</p>
        <p>{props.e.weather.icon}</p>
        <p>{props.e.temp}</p>
        <p>{props.e.weather.description}</p>
        {/* <p>{weather.data && weather.data.forcast[5].wind_cdir_full}</p>
      </div>
      {/* <div className="weatherTwo">
        <h1>Forecast Destination 2</h1>
        <p>{e.date}</p>
        <p>{e.icon}</p>
        <p>{e.weather}</p>
        <p>{e.desc}</p>
      </div> */}
    </div>
    </div>
  );
}



export default Forecast;


// <div className="testWeather">
//       <div className="weatherOne">
//         <h1>Forecast Destination 1</h1>
//         {/* <p>{e.city}</p> */} */}
//         <p>{weather.e.date}</p>
//         <p>{weather.e.icon}</p>
//         <p>{weather.e.weather}</p>
//         <p>{weather.e.desc}</p>
//         {/* <p>{weather.data && weather.data.forcast[5].wind_cdir_full}</p>
//       </div>
//       {/* <div className="weatherTwo">
//         <h1>Forecast Destination 2</h1>
//         <p>{e.date}</p>
//         <p>{e.icon}</p>
//         <p>{e.weather}</p>
//         <p>{e.desc}</p>
//       </div> */}
//     </div>
//     </div>