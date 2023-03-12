import React from 'react'
import {Container, Row} from "../../styled/index";
import styled from "styled-components";
import "../About/About.css";
import Clamp from 'react-multiline-clamp';

const AboutSection = styled.section`
padding:70px 0;
background-color:#212121;

`
const AboutImg = styled.div`
flex:1;
@media (max-width: 565px){

 padding-bottom:20px;
} 
`
const AboutText = styled.div`
flex:2;



`
const AboutPhoto = styled.img`
width:300px;
height:300px;

@media (max-width: 767px) {
width:285px
 }
 @media (max-width: 565px) {
    width:300px;
    height:300px;
}
 @media (max-width: 355px) {
    width:230px;
    height:230px;
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
                <Clamp withTooltip lines={5}>
                <p className='about-me'>I am Gulbakhor Alimova. I graduated from Tashkent State University of Oriental Studies with 
                    a bachelor's and master's degree.I am a developer with experience in building websites. I have good skills in FrontEnd development and have so far conducted projects in JavaScript, React, and Vue.js.
                    I participated in a 9-month FrontEnd Bootcamp offered by Najot Ta'lim, a renowned IT and programming education center in Uzbekistan. I also completed a one-month digital internship program offered by IT Park (Uzbekistan) in cooperation with UNDP.
                    I would be happy to carry out FrontEnd related projects for your business.</p>
                    </Clamp>
            </AboutText>
            </Row>
        </Container>
           
        </AboutSection>
    )
}

export default About
