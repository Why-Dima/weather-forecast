import React, { useState } from "react";
import "../styles/App.css";

import Header from "./Header";
import Main from "./Main";
import Weather from "./Weather";
import Countries from "./Countries";


export const App = () => {
const [name, setName ] = useState('');
const handleNameChange = (name) => {
    setName(name)
    console.log(name)
}

    return (
        <React.Fragment>
            <Header></Header>  
            <Main></Main>
            <Countries onChange={handleNameChange} />
            <Weather name={name} /> 
        </React.Fragment>
    );
}

export default App;

