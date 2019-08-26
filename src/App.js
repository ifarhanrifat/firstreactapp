import React, {Component} from 'react';
import Header from './Header';
import Section from './Section';
import Sidebar from './Sidebar';
import Table from './Table';
import Content from './Content';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './style.css';

class App extends Component{
    render(){
        return(
            <Router>
                <div>
                    Hello this is container
                    <Header />
                    <Table />
                    <Route path='/' component = {Content} />
                    <Route path='/' component = {Sidebar} />
                    <footer>This is footer boi !</footer>
                </div>
            </Router>
        )
    }
}

export default App;
