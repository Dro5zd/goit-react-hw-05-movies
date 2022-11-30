import styled from 'styled-components'
import {NavLink} from 'react-router-dom';
// import {Search} from '@styled-icons/bootstrap/Search';

interface INavHeader {
    show: boolean;
}

export const NavHeader = styled.header<INavHeader>`
  top: 0;
  position: fixed;
  width: 100%;
  z-index: 100;
  padding: 20px;
  display: flex;
  justify-content: start;
  align-items: center;
  background-color: ${props => props.show && '#111'};
  
  transition-timing-function: ease-in;
  transition: all 0.5s;
`

export const MainLogo = styled.img`
  margin-right: 60px;
`

export const StyledLink = styled(NavLink)`
  margin-right: 30px;
  font-size: 22px;
  color: white;
  text-decoration: none;

  &.active {
    font-weight: bold;
  }
`;
