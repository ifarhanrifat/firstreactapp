import React, {Component} from 'react';
import {Container, Row, Col, Table, Button} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

//life cycle hooks // particular time pe jo kam krana ho to use hota,
class Content extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            products: []
        }
    }
    increment(){
        alert("sd");
    }
    incrementCount(){
        this.setState({
            count: this.state.count + 1
        })
    }
    componentWillMount() {
        let response = fetch("https://greencommunitylaundry.herokuapp.com/api/products");
        response.then(function(res){
            return res.json();
        }).then((products) => {
            const newProducts = products.map(({id, name, image, description, price}) => { //destructuring
                return {id, name, image, description, price}
            });
            this.setState({
                products: newProducts
            })
        })
    }
    renderRow() {
        return this.state.products.map((product, i) =>{
            return(
                <Col key={product.id} md={4}>
                    <NavLink to="/product">
                        <div className="card mt-4">
                            <img className="card-img-top" src={`https://greencommunitylaundry.herokuapp.com/api/images/${product.image}`} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.description}</p>
                                <p>Price: {product.price}</p>
                            </div>
                        </div>
                    </NavLink>
                </Col>
            )
        })
    }
    render(){
        return(
            <div className="container">
                <Row>{
                    this.renderRow()
                }
                </Row>
            </div>
        )
    }}
export default Content;