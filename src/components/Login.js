import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import logo from '../logo.svg'
import { login } from './userFunction';

export default class Login extends Component {
    constructor(){
        super()
        this.state = {
            username : '',
            password: '',
            
        }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.pnSubmit.bind(this)
    }
    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault()
        const User = {
            username : this.state.username,
            password : this.state.passsword
        }
        login(user).then (res => {
            if(res) {
                this.props.history.push('/')
            }
        })
    }

    
    render() {
        return (
            <div class="container">
              
                    <div class="row justify-content-center">
                    <LoginWrapper className="navbar navbar-expand-sm navbar-dark px-sm-3">
                    <form noValidate onSubmit={this.onSubmit}>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Username</label>
                                <input type="email" class="form-control" id="username" name ="username" value={this.state.username} onChange={this.onChange} aria-describedby="emailHelp"/>
                                
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" name="pasword" value={this.state.password} onChange={this.onChange} id="exampleInputPassword1"/>
                            </div>
                            
                            <input type="submit" class="btn btn-primary" value="Login"/>
                            <Link to ="/" className="ml-2">
                                <input type="submit" class="btn btn-primary" value="Back"/>
                            </Link>
                            </form>

                    </LoginWrapper>
                
                </div>
            </div>
        )
    }
}

const LoginWrapper = styled.nav`
background:var(--mainYellow);

.nav-link{
    color:var(--mainBlue) !important;
    font-size:1.3rem;
    text-transform:capitalize;
}
`;
