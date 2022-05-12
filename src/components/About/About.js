import React from 'react'
import {Container, Row} from "../../styled/index";
import styled from "styled-components";
import "../About/About.css";

const AboutSection = styled.section`
padding:70px 0;
background-color:#212121;
`
const AboutImg = styled.div`
flex:1;
`
const AboutText = styled.div`
flex:2;
@media (max-width: 1199px) {
   margin-left:20px;
}
`
const AboutPhoto = styled.img`
width:300px;
height:300px;

@media (max-width: 767px) {
width:285px
 }
 @media (max-width: 565px) {
    width:200px;
    height:257px;
     }

`

const About = () => {
    return (
        < AboutSection id="about">
        <Container>
            <Row>
            <AboutImg>
            <AboutPhoto src="/img/picture.jpg" alt="myphoto"/>
            </AboutImg>
            <AboutText>
                <div className='about-main'>
                    <span className='about-who'>Who I am</span>
                    <span className='about-line'></span>
                </div>
                <h3 className='about-title'>About Me</h3>
                <p className='about-me'>I am Gulbakhor Alimova. I graduated from Tashkent State University of Oriental Studies with 
                    a bachelor's and master's degree. I am currently studying FrontEnd and working on my own.</p>
            </AboutText>

            </Row>
        </Container>
           
        </AboutSection>
    )
}

export default About
