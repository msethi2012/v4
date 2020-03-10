import React, { Component } from 'react';
import StuffList from './components/stuffList';
import Button from './components/Button';

class App extends Component {


    render() {
        return (
            <div className="app">
                <Button />
                <StuffList />
            </div>
        );
    }
}

export default App;