import React, {Component} from 'react';
import {Card,Row, Container, CardImg, CardBody, CardTitle, CardText, Col} from 'reactstrap';
import DishesDetails from './stateless/DishesDetails';

class Dish extends Component{


    constructor(props){
        super(props);
        
        this.state = {
            showDescription: false
        }
        console.log('Menu Component Constructor is invoked.');
    }

    toggleDescription() {
        console.log('Toggle description.');
        this.setState({showDescription: !this.state.showDescription});
    }

    componentDidMount(){
        console.log('Menu Component did mount.');
    }

    render(){
            return (
                //<Col xs="12" md="6" lg="3" className="mt-5">
                <Card onClick={() => this.toggleDescription()} className="h-100">
                        <CardImg className="h-50" src={this.props.image} alt={this.props.imageName}/>
                        <DishesDetails isRendered={this.state.showDescription} title={this.props.title} description={this.props.description} />
                </Card>
                //</Col>
            );
    }

}

export default Dish;