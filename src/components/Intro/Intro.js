import React from 'react';
import "./Intro.css";
import {Container, Row} from "../../styled/index";
import styled from "styled-components";


const IntroSection = styled.section`
padding:200px 0 70px 0px;
display: flex;
background-color:#212121;
color:#fff;

`
const IntroLeft = styled.div`
@media (max-width: 480px) {
  padding:20px 0;
  order:2;

 }

`
const Intro = () => {
    return (
        <IntroSection>
            <Container>
                <Row>
                <IntroLeft >
                <div className="intro__text">Hello, my name is</div>
                <div className="intro__text1">Gulbakhor Alimova</div>
                <div className="intro__text2">And I'm a <span className="intro__text3">Frontend Developer</span></div>   
                </IntroLeft>
              
                </Row>
            </Container>
        </IntroSection>
    )
}

export default Intro
