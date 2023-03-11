import styled from "styled-components";

export const Container = styled.div`
max-width: 1110px;
margin-left:auto;
margin-right:auto;
width:100%;



`
export const Row = styled.div`
display: flex;
justify-content: space-between;


@media (max-width: 480px){
  flex-wrap:wrap;
  flex-direction:column;
} 
`