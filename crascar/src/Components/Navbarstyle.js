import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavCont = styled.div`  

  width: 100vw;
  height: 90px;
  position: fixed;
  z-index:900;
  top: 0;
  box-shadow: -3px -1px 23px 5px rgba(9,9,79,0.54);
-webkit-box-shadow: -3px -1px 23px 5px rgba(9,9,79,0.54);
-moz-box-shadow: -3px -1px 23px 5px rgba(9,9,79,0.54);
  display: grid;
  grid-template-columns: repeat(2,1fr);
`
export const Logo = styled.div` 
   width: 30vw;
   border: 1px solid black;
`

export const Nav = styled.div`

 border: 1px solid black;
 width: 70vw;
padding-left: 80px;
padding-top: 40px;

`

export const Links = styled(Link)` 

margin-left: 60px;
text-decoration: none;
color: black;
font-weight: bolder;
font-size: 18px;
`