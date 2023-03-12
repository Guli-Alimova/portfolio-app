import styled from "styled-components";

export const Container = styled.div`
max-width: 1170px;
margin:0 auto;
padding:0 20px;

`
export const Row = styled.div`
display: flex;
justify-content: space-between;


@media (max-width: 480px){
  flex-wrap:wrap;
  flex-direction:column;
} 
`