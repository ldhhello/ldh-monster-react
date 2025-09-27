import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderBox = styled.header`
  padding-left: 1rem;
  padding-right: 1rem;

  display: flex;
  flex-direction: row;

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

  animation: fadein 1s ease 0s both;

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
`;

export default function Header() {
  return <HeaderBox>
      <Link to={'/'}>About Me</Link>
      <Link to={'/portfolio'}>Portfolio</Link>
  </HeaderBox>
}