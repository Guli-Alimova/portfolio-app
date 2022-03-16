import React from 'react'
import styled from "styled-components";
import { Container } from "../../styled/index";
import { Link } from 'react-router-dom';
import {BsInstagram} from "react-icons/bs";
import {BsFacebook} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";
import {BsLinkedin} from "react-icons/bs";
import {BiCopyright} from "react-icons/bi";
import "./footer.css";

const FooterSection = styled.section`
background-color: #060709; 
padding:10px;
position:relative;


`
const FooterLogo = styled.div`
display:flex;
justify-content:space-between;
align-items: center;
`
const Footer = () => {
    return (
        
            <FooterSection>
                <Container>
                    <FooterLogo> 
                   <div className="footer-logo">
                   <a href='/'><img src="/img/Free_Sample_By_Wix.jpeg" width="100px"/></a>    
                   </div>
                   <div>
                       <BiCopyright style={{color:"#fff"}}/><span className='footer-copy'>Copyright 2021. All rights reserved</span>
                   </div>
                   <div className="header-links">
                  <a href="https://www.instagram.com/guli._alimova/"><BsInstagram style={{color:"#fff", marginRight:"20px", fontSize:"20px"}}/></a>
                  <a href="#"><BsFacebook style={{color:"#fff", marginRight:"20px", fontSize:"20px"}}/></a>
                  <a href="https://github.com/Guli-Alimova"><BsGithub style={{color:"#fff", marginRight:"20px", fontSize:"20px"}}/></a>
                  <a href="https://www.linkedin.com/in/gulbakhor-alimova-510970228/"><BsLinkedin style={{color:"#fff", marginRight:"20px", fontSize:"20px"}}/></a>
                  </div>
                       
                    </FooterLogo>
                    
                </Container>

            </FooterSection>
      
     
    )
}

export default Footer
