import React, {Component} from "react";
import {Container,Collapse, Navbar, NavbarToggler, Nav, NavItem, NavbarBrand, Row, Col} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component{

    constructor(props){
        super(props)

        this.state = {
            isNavOpen: false
        }
        this.toggleNavHandle = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({isNavOpen: !this.state.isNavOpen});
    }

    render(){
        return(
        <>
        <Navbar dark color="warning" expand="md">
          <Container>
              <Row>
                  <Col>
                    <NavbarToggler onClick={this.toggleNavHandle} />
                    <NavbarBrand className="mr-auto" href="/"><img src="assets/images/alberto.png" alt="alberto" /></NavbarBrand>
                  </Col>
                  <Collapse isOpen={this.state.isNavOpen} navbar>
                  <Col>
                  <Nav>
                        <NavItem>
                            <NavLink className="nav-link" to="/home">
                                <span className="fa fa-home fa-lg"></span>
                            </NavLink>
                            <NavLink className="nav-link" to="/aboutus">
                                <span className="fa fa-info fa-lg"></span>
                            </NavLink>
                            <NavLink className="nav-link" to="/menu">
                                <span className="fa fa-list fa-lg"></span>
                            </NavLink>
                        </NavItem>
                    </Nav>
                  </Col>
                  </Collapse>
              </Row>

          </Container>
        </Navbar>
        <Container>
            <Row>
                <Col xs="12" sm="6">
                    <h1>
                        Ristorante Con Fusion
                    </h1>
                    <p>
                        Any random text about this lipsmacking restaurant that looks like absolute shit but it doesnt matter because im learning react at the very least.
                    </p>
                </Col>
            </Row>
        </Container>
        </>
        )
    }
}

export default Header;