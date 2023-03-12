import React from 'react';
import "./header.css";
import {Container} from "../../styled/index";
import styled from 'styled-components';
import { useState } from 'react';
import Burger from '../Burger/Burger';
import {GiHamburgerMenu} from "react-icons/gi";
import {MdOutlineCancel} from "react-icons/md";
import { NavLink } from 'react-router-dom';

const Modal = styled.div`
display: none;
margin-right: 24px;
color: #A6533B;
font-size: 26px;
@media(max-width: 565px){
    display: block;
}`

const BurgerBtn = styled.div`
    position: relative;
    left:0px;
    top:0px;
   `



const Header = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="header">
            <Container width="0">
            <div className="header-main">
             
            <div className="header-logo">
            <NavLink to='/'><img src="/img/Free_Sample_By_Wix.jpeg" alt="logo" width="100px"/></NavLink>    
            </div> 
                <div className='header-right'>
                <Modal>
                            <BurgerBtn className="burger-btn" onClick={()=>{
                                setOpenModal(openModal ? false : true);
                                }}>
                            { openModal ? <MdOutlineCancel/> : <GiHamburgerMenu/>  }
                            </BurgerBtn>
                            {openModal && <Burger  closeModel={setOpenModal} />} 
                            </Modal>
                            
                </div>
            <div className="header-links">
                <a href="#"  className="header-links__item">Home</a>
                <a href="#about" className="header-links__item">About</a>
                <a href="#skill" className="header-links__item">Skills</a>
                <a href="#myproject" className="header-links__item" >My Project</a> 
              </div>
            </div> 
            </Container>
           
            
           
        </div>
    )
}

export default Header
