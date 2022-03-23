import React, {Component} from 'react';
import {CardBody, CardTitle, CardText} from 'reactstrap';

class DishesDetails extends Component{
    
    constructor(props){
        super(props);

        this.state = {
            isRendered: this.props.isRendered
        }

    }
    
    render(){
        if(this.props.isRendered === true){
        return(
        <CardBody>
            <CardTitle tag="h5">
                {this.props.title}
            </CardTitle>
            <CardText>
                {this.props.description}
            </CardText>
        </CardBody>
        )  
        } else {
            return(
                <div></div>
            )
        }
    }

}

export default DishesDetails;