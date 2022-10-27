import styled from 'styled-components';

const LoginDiv = styled.div`
 margin: auto;
 background-color:#f8d0d2;
 height: 25rem;
 width:30rem;
 padding-top:3rem;
 /* border-radius:5%; */
 opacity:0.8;
 margin-top: 15rem;

 
`;
export const LoginLabel = styled.label`
color: black;
font-weight:bold;


`;
export const LoginButton = styled.button`
background-color: #f2a1a5;
border: 2px solid #c18084;
padding: 0.8rem;
margin:0.8rem;
border-radius: 5px;

&:hover{
/* background-color:#f8d0d2; */
  opacity: 0.7;
  transform: scale(0.94);
  cursor: pointer;
}
`;


export default LoginDiv;