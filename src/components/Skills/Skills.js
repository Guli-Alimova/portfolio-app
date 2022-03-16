import styled from "styled-components";
import React from 'react'
import Skills from "./Skills.css";
import { Container } from "../../styled";

const SkillSection = styled.section`
background-color:#212121;
padding:50px 0;

`
const SkillsTitile = styled.h3`
font-style: normal;
font-weight: 700;
font-size: 2.4rem;
line-height: 2.9rem;
color: #fff;
margin-top: 1.6rem;
`
const SkillsBox = styled.div`
display:flex;
justify-content:space-between;
flex-wrap:wrap;
`
const Skill = ()=>{

    return(
        <SkillSection >
        <Container>
        <div className='about-main'>
            <span className='about-who'>What I do</span>
            <span className='about-line'></span>
        </div>
        <SkillsTitile>Skills</SkillsTitile>
        <SkillsBox>
            <div className="skills-card"><img src="/img/html5-logo-EF92D240D7-seeklogo.com.png" alt="html" style={{width:"100%", height:"100%"}}/></div>
            <div className="skills-card"><img src="/img/css3-logo-8724075274-seeklogo.com.png" alt="css" style={{width:"100%" , height:"100%"}}/></div>
            <div className="skills-card"><img src="/img/java-script-js-logo-ACF4AE5082-seeklogo.com.png" style={{width:"100%" , height:"100%"}} /></div>
            <div className="skills-card"><img src="/img/react-logo-7B3CE81517-seeklogo.com.png" alt="react" style={{width:"100%" , height:"100%"}} /></div>
            <div className="skills-card"><img src="/img/sass-logo-E41E7734A8-seeklogo.com.png" alt="sass" style={{width:"100%" , height:"100%"}}/></div>
            <div className="skills-card"><img src="/img/bootstrap-logo-3C30FB2A16-seeklogo.com.png" alt="bootstrap" style={{width:"100%" , height:"100%"}}/></div>
            <div className="skills-card"><img src="/img/material-ui-logo-5BDCB9BA8F-seeklogo.com.png" alt="mui" style={{width:"100%" , height:"100%"}} /></div>
            <div className="skills-card"><img src="/img/Без названия.png" alt="ant" style={{width:"100%" , height:"100%"}} /></div>
            <div className="skills-card"><img src="/img/bem.png" alt="bootstrap" style={{width:"100%" , height:"100%", borderRadius:"50%"}}/></div>
          
        </SkillsBox>
          
        </Container>
        </ SkillSection >

    )

}
export default Skill;