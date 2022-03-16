import React from 'react'
import { Container } from "../../styled/index";
import styled from "styled-components";
import "../Portfolio/Portfolio.css";
import  {Projects} from "../../db";
import ProjectCard from '../../components/ProjectCard/ProjectCard';


const PortfolioSection = styled.section`
padding:50px 0;
background-color:#212121;
z-index:99;
`
const PortfolioText = styled.h3`
font-style: normal;
font-weight: 700;
font-size: 2.4rem;
line-height: 2.9rem;
color: #fff;
margin-top: 1.6rem;
`
const Portfolio = () => {
    // const [project, setproject]=useState()
    return (
        <div>
            <PortfolioSection>
                <Container>
            <div className='about-main'>
            <span className='about-who'>My Project</span>
            <span className='about-line'></span>
            </div>
            <PortfolioText >My Portfolio</PortfolioText>
     <div className='project-wrapper'>
             {
               Projects.map(el=>
                (<ProjectCard key={el.id} projectobj={el} > </ProjectCard>))

           } 
     </div>
       

              </Container>

            </PortfolioSection>
            
        </div>
    )
}

export default Portfolio;
