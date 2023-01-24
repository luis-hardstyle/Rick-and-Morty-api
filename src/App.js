import React, { Fragment } from "react";
import Characters from "./components/Characters";
import Header from "./components/Header";
import './main.scss';
import './components/Header.css'


function App(){
    return (
        <Fragment>
            <Header
            title ="Rick and Morty"
            />
            <Characters/>
        </Fragment>
    );
}

export default App;