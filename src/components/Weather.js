import React, { useEffect, useState } from "react";
import axios from "axios";

import "../styles/Weather.css";


export const Weather = ({name}) => {
    console.log(name)    
    const [weather, setWeather] = useState(0);
    axios.get("https://api.openweathermap.org/data/2.5/weather?q="+name+"&appid={API}&units=metric").then(res => {
        console.log(res);
        setWeather(res.data.main);
});
    return(
        <React.Fragment>
            <h1>Температура °C</h1>
            <h1>{weather.temp}</h1>
        </React.Fragment>        
    );
}


export default Weather;

