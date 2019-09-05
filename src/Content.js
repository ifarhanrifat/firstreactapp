import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Col} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import updateProducts from './action';
import Spinner from 'react-bootstrap/Spinner'

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
        //this.props.bind()
        let response = fetch("https://greencommunitylaundry.herokuapp.com/api/products");
        response.then(function(res){
            return res.json();
        }).then((products) => {
            const newProducts = products.map(({_id, name, image, description, price}) => { //destructuring
                return {_id, name, image, description, price}
            });

            console.log("dispatch products", this.props.dispatch(updateProducts(products)));

            //this.setState({
              //  products: newProducts
            //})
        })
    }
    renderRow() {
        console.log("products map", this.props.products)
        return this.props.products.products.map((product, i) =>{
            return(
                <Col key={product.id} md={4}>
                    <NavLink to={`/product/${product._id}`}>
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
        console.log("redux", this.props.products);
        return(
            <div className="container">
                <Row>{
                    this.props.loading ? <Spinner animation="grow" /> : this.renderRow()
                }
                </Row>
            </div>
        )
    }}

export default connect((state) => function(state){
    console.log("State", state);
    return {products: state.products};
})(Content);

//component se connect hogea hamara store
//returning connected component (enhanced component)