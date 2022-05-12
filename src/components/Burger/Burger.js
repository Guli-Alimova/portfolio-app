import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const BigModal = styled.div`

`
const BurgerMenu = styled.div`
background-color: #A6533B;
width: 54%;
padding: 30px;
display: flex;
flex-direction: column;
position: absolute;
top: 72px;
left: 185px;
z-index: 222;
`
const HeaderLink = styled.a`
font-family: Bebas Neue;
font-size: 40px;
line-height: 40px;
text-transform: uppercase;
color: rgba(255, 255, 255, 0.7);
text-align: center;
padding-bottom: 40px;
&:nth-child(4) {
    padding-bottom: 49px;
}
&:hover{
    color: #FFFFFF;
}
&.active {
    color: #fff;
}
`

const Burger = ({closeModel}) => {

    
    return (
        <BigModal> 
            {/* <button className="modal-close" onClick={()=>closeModel(false)} width="30px"> <img src="/img/Без названия.png" width="30px"/> </button> */}
                <BurgerMenu onClick={()=>closeModel(false)}>
                <HeaderLink href='/'> Home  </HeaderLink>
                <HeaderLink href='#about'> About</HeaderLink>
                <HeaderLink href='#skill'> Skills</HeaderLink>
                <HeaderLink href='#myproject'> My Projects </HeaderLink>
                </BurgerMenu>
        </BigModal>
    )
}

export default Burger;