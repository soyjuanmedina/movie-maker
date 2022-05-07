import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Footer from './components/Footer';
import Header from './components/Header';
import Movies from './containers/Movies'
import AddMovie from './components/AddMovie';

const App = () =>{
    return (
        <div>
            <Header />
            <Movies ></Movies>
            <AddMovie />
            <Footer />
        </div>
    )
}

export default App;
