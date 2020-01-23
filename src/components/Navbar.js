import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import logo from '../logo.svg'
import jwt_decode from 'jwt-decode'

 class Navbar extends Component {
     constructor(){
         super()
         this.state = {
             first_name: '',
             last_name: '',
             email: ''
         }
     }

     componentDidMount(){
         const token = localStorage.usertoken
         const decoded = jwt_decode(token)
         this.setState({
             first_name : decoded.first_name,
             last_name : decoded.last_name,
             email :decoded.email,
         })
     }

    logOut(e){
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.hystory.push('/')
    }
    render() {
        const loginRegLink = (
        <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
            Furniture Online
            <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fas fa-cart-plus" />
                        </span>
                      
                    </ButtonContainer>
                </Link>
                <Link to="/login" className="ml-2">
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fas fa-sign-in-alt" />
                        </span>
                        Login
                    </ButtonContainer>
                </Link>
             </NavWrapper>
        )
        const userLink = (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                Furniture Online
                <div className="ml-auto">
                        
                            <span className="mr-2">
                                {this.state.fisrt_name}
                            </span>
                          
                       
                    </div>
                    <Link to="/login" className="ml-2">
                        <ButtonContainer>
                            <span className="mr-2">
                                <i className="fas fa-sign-in-alt" />
                            </span>
                            Logout
                        </ButtonContainer>
                    </Link>
                 </NavWrapper>
            )
        return (
            <div>
                {localStorage.usertoken ? userLink : loginRegLink}
            </div>
        )
    }
}

const NavWrapper = styled.nav`
background:var(--mainWhitee);
.nav-link{
    color:var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform:capitalize;
}
`;

export default withRouter(Navbar)
