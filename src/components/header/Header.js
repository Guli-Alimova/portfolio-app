import React from 'react';
import "./header.css";
import styled from "styled-components";
import {Container} from "../../styled/index";



const Header = () => {
    return (
        <div className="header">
            <Container>
            <div className="header-main">
            <div className="header-logo">
            <a href='/'><img src="/img/Free_Sample_By_Wix.jpeg" width="100px"/></a>    
            </div>
            <div className="header-links">
                <a href="/"  className="header-links__item">Home</a>
                <a href="" className="header-links__item">About</a>
                <a href="" className="header-links__item">Skills</a>
                <a href="" className="header-links__item" >My Project</a> 
              </div>
            </div> 
            </Container>
           
            
           
        </div>
    )
}

export default Header
