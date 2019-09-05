import React, {Component} from 'react';
import {Container, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component{
    constructor(props){
        super(props);
        this.HeaderDiv = "This is Header Boi !";
    }
    render(){ //isko jo bhi return denge wo print krdega
        return(
            <div className= "headerClass">
                {this.HeaderDiv}
                <header>
                    <Container>
                        <Col>
                            <Navbar bg="light" expand="lg">
                                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                        <NavLink
                                            exact
                                            activeStyle={{
                                                textDecoration: 'Underline'
                                            }}
                                            activeClass='active'
                                            to='/'
                                            >
                                            Home
                                        </NavLink>
                                        <NavLink
                                            activeStyle={{
                                                textDecoration: 'Underline'
                                            }}
                                            activeClass='active'
                                            to='/about'
                                        >
                                            About
                                        </NavLink>
                                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                            <NavDropdown.Divider/>
                                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                    <Form inline>
                                        <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                                        <Button className="navbar-btn" style={{backgroundColor: "#fff"}} variant="outline-success">Search</Button>
                                    </Form>
                                </Navbar.Collapse>
                            </Navbar>
                        </Col>
                    </Container>
                </header>
            </div>
        )
    }
}

export default Header;