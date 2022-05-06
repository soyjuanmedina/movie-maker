import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className='topnav'>
                <a className='logo' href='/'>Movie Maker</a>
                <div className='search-container'>
                    <form>
                        <a href='/'>
                            Add Movies
                            <input type='text' placeholder='Search...' name='search'></input>
                            <button type='submit'><i className='fa fa-search'></i></button>
                        </a>
                    </form>
                </div>
            </div>
        );
    }
}

export default Header;