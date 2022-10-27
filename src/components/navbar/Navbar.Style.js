import styled from 'styled-components';

const NavbarDiv = styled.div`
background-color: #fff;
box-shadow:1px 1px 5px grey ;
margin-bottom: 2rem;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const NavbarUl=styled.ul`
display:flex;
gap: 0.7rem;
list-style-type:none ;



`;


export default NavbarDiv;
