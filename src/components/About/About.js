import React from 'react'
import {Container, Row} from "../../styled/index";
import styled from "styled-components";
import "../About/About.css";

const AboutSection = styled.section`
padding:70px;
background-color:#212121;
`
const AboutImg = styled.div`
flex:1;
`
const AboutText = styled.div`
flex:2;
`

const About = () => {
    return (
        < AboutSection>
        <Container>
            <Row>
            <AboutImg>
            <img src="/img/picture.jpg" alt="picture"/>
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
