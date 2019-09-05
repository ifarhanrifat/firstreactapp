import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './store';
import Header from './Header';
import Home from './Home';
import About from './About';
//import Section from './Section';
import Sidebar from './Sidebar';
import Table from './Table';
import Content from './Content';
import ProductView from './ProductView';
import {Container} from 'react-bootstrap';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './style.css';


class App extends Component{
    render(){
        return(
            <Provider store={store}>
                <Router>
                    <Container>
                        Hello this is container
                        <Header />
                        <Route exact path='/' component={Home} />
                        <Route path='/about' component={About} />
                        <Table />
                        <Route path='/products' component = {Content} />
                        <Route path='/product/:id' component = {ProductView} />
                        <Route path='/' component = {Sidebar} />
                        <Route exact path='/' component = {Table} />
                        <footer>This is footer boi !</footer>
                    </Container>
                </Router>
            </Provider>
        )
    }
}

export default App;
