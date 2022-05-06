import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Footer from './components/Footer';
import Header from './components/Header';
import Movies from './containers/Movies'

const App = () =>{
    return (
        <div>
            <Header />
            <Movies ></Movies>
            <Footer />
        </div>
    )
}

export default App;
