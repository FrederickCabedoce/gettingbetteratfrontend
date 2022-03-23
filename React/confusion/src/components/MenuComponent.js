import React, {Component} from 'react';
import {Card,Row, Container, CardImg, CardBody, CardTitle, CardText, Col} from 'reactstrap';
import Dish from './Dish';

class Menu extends Component{

    constructor(props){
        super(props);
        
        this.state = {
            selectedDish: null
        }
        console.log('Menu Component Constructor is invoked.');
    }

    onDishSelect(dish) {
        console.log('Menu Component Constructor is invoked.');
        dish.isRendered = true;
    }

    renderDish(dish){
        if(dish != null){
            return(
            <Col xs="8" className="offset-2 mt-5">
                <Card key={dish.id} className="h-100">
                        <CardImg className="h-50" src={dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle tag="h5">
                                {dish.name}
                            </CardTitle>
                            <CardText>
                                {dish.description}
                            </CardText>
                        </CardBody>
                </Card>
            </Col>)
        }
    }

    componentDidMount(){
        console.log('Menu Component did mount.');
    }

    render(){

        const menu= this.props.dishes.map((dish) =>{
            return (
                <Col  key={dish.id} xs="12" md="6" lg="3" className="mt-5">
                    <Dish image={dish.image} imageName={dish.name} title={dish.title} description={dish.description} />
                </Col>
            );
        });
        console.log('Menu Component Constructor is rendered.');
        return(
            <Container>
                <Row>
                    {this.renderDish(this.state.selectedDish)}
                </Row>
                <Row xs="2">
                    {menu}
                </Row>
            </Container>
        );
    }

}

export default Menu;