import React, {Component} from 'react';
import {Container, Row, Col, Table, Modal, Button} from 'react-bootstrap';

//life cycle hooks // particular time pe jo kam krana ho to use hota,
class Section extends Component{
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
            const newProducts = products.map(({_id, description, price}) => { //destructuring
                return {_id, description, price}
            });
            this.setState({
                products: newProducts
            })
        })
    }
    renderTableData() {
        this.state.products.map(( product) => {
            return (
                <tr key={product._id}>
                    <td>{product._id}</td>
                    <td>{product.description}</td>
                    <td>{product.price}</td>
                </tr>
            )
        })
        }
    render(){ //jb update hoga state to render dobara chale ga
        return(
            <section>
                <Container>
                    <Row>
                        <Col>
                            <Table striped bordered hover>
                                <thead>
                                <tr>
                                    <th>
                                        <Button onClick = {this.increment}>Increment</Button>
                                        <Button onClick = {() =>
                                            this.incrementCount()
                                        }>
                                        IncrementFuncCount</Button>
                                    </th>
                                    <th>Name</th>
                                    <th>Class</th>
                                    <th>Email</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>{this.state.count}</td>
                                    <td>Farhan</td>
                                    <td>BS</td>
                                    <td>ifarhanrifat@gmail.com</td>
                                </tr>
                                {this.renderTableData()}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Section;