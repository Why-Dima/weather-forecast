import React, { useEffect, useState } from "react";
import axios from "axios";

import "../styles/Weather.css";


export const Weather = (name) => {
    console.log(name)    
    const [weather, setWeather] = useState(0);
    useEffect(() => {
        console.log([name.name])
        axios.get("https://api.openweathermap.org/data/2.5/weather?q="+ name.name +"&appid=b89a1bfe31674e4a23292c64d4052903&units=metric").then(res => {
            console.log(res);
            setWeather(res.data.main);
            });
    }, [name.name]);
    return(
        <React.Fragment>
            <h1>Температура °C</h1>
            <h1>{weather.temp}</h1>
        </React.Fragment>        
    );
}


export default Weather;

