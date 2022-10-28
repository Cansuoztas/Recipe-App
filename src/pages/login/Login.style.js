import styled from 'styled-components';

const LoginDiv = styled.div`
 margin: 15rem auto;
 background-color:

 #DFD3C3;
 height: 50vh;
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  border-radius:50%;

 
`;
export const LoginLabel = styled.label`
color: black;
font-weight:bold;


`;
export const LoginButton = styled.button`
background-color: #7D6E83;
border: 2px solid gray;
font-weight:bold;
padding: 0.5rem;
margin:1rem;
border-radius: 5px;

&:hover{
  opacity: 0.7;
  transform: scale(0.94);
  cursor: pointer;
}
`;


export default LoginDiv;