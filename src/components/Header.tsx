import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { media } from '../design/media';

const HeaderBox = styled.header`
  padding-left: 1rem;
  padding-right: 1rem;

  display: flex;
  flex-direction: row;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 1.2rem;

  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.75);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(13.3px);
  -webkit-backdrop-filter: blur(13.3px);

  z-index: 1000;

  a { /* Link */
    background: none;
    color: black;
    text-decoration: none;
    border: none;
    box-sizing: border-box;
    padding: 1rem;
    margin: 0.3rem;
    font-size: 1.3rem;
  }

  ${media.mobile`
    //background-color: red;

    margin: 0;
    //border-radius: 0 0 16px 16px;
    border-radius: 0;
    padding-top: 6px;
    padding-bottom: 6px;
    a {
      font-size: 1.28rem;
      padding-left: 0.4rem;
      padding-right: 0.4rem;
    }
  `}
  ${media.mobileSmall`
    padding-top: 4px;
    padding-bottom: 4px;
    a {
      font-size: 1.24rem;
      padding-left: 0.35rem;
      padding-right: 0.35rem;
    }
  `}
`;

export default function Header() {
  return <HeaderBox>
      <NavLink to={'/'} style={a => a.isActive ? {fontFamily: 'Pretendard-Bold'} : {}}>About Me</NavLink>
      <NavLink to={'/portfolio'} style={a => a.isActive ? {fontFamily: 'Pretendard-Bold'} : {}}>Portfolio</NavLink>
  </HeaderBox>
}