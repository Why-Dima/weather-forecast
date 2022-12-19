import React, { useEffect, useState } from "react";
import axios from "axios";

import "../styles/Countries.css";


export const Countries = ({onChange}) => {
    const [city, setCity] = useState([]);
    useEffect(() => {
        axios.get("https://restcountries.com/v2/all").then(res => {
            console.log(res)
            setCity(res.data)
        });
    }, []);
    const handleNameChange = (event) => {
        onChange(event.target.value)
    }
    return(
        <React.Fragment>
            <div>
                <select name="name" onChange={handleNameChange}>
                    {city.map(name => <option key={name.alpha3Code}>{name.capital}</option>)}
                </select>
            </div>
        </React.Fragment>
    );
}

export default Countries;

