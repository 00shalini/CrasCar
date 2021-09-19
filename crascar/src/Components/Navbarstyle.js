import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavCont = styled.div`  

  width: 100vw;
  height: 90px;
  position: fixed;
  z-index:10;
  top: 0;
  box-shadow: -3px -1px 23px 5px rgba(9,9,79,0.54);
-webkit-box-shadow: -3px -1px 23px 5px rgba(9,9,79,0.54);
-moz-box-shadow: -3px -1px 23px 5px rgba(9,9,79,0.54);
  display: grid;
  grid-template-columns: repeat(2,1fr);
  background-color: #737373;

`
export const Logo = styled.div` 
   width: 30vw;

`

export const Nav = styled.div`

 width: 70vw;
padding-left: 80px;
padding-top: 40px;

`

export const Links = styled(Link)` 

margin-left: 80px;
text-decoration: none;
font-weight: 600;
font-size: 16px;
color: white;
`

export const Img = styled.img` 

 width: 100px;
 padding-left: 50px;
 padding-top: 20px;
`