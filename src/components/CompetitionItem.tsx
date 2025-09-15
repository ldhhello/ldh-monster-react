import React, { type PropsWithChildren } from 'react';
import styled from 'styled-components';

const Item = styled.li`
  list-style-type: none;

  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.46);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(9.3px);
  -webkit-backdrop-filter: blur(9.3px);

  padding: 1rem;

  margin-bottom: 1rem;
`;

const LogoImage = styled.img`
  height: 1.1rem;
  vertical-align: bottom;
  padding-right: 0.3rem;
`;

const BiggerLogoImage = styled.img`
  height: 1.1rem;
  vertical-align: bottom;
  padding-left: 0.1rem;
  padding-right: 0.5rem;
  transform: scale(1.5);
`;

type Props = {
  logoImage: string,
  biggerImage?: boolean
};

export default function CompetitionItem({logoImage, biggerImage, children}: PropsWithChildren<Props>) {
  return <Item>
    { !biggerImage && <LogoImage src={logoImage} /> }
    { biggerImage && <BiggerLogoImage src={logoImage} /> }
    {children}
  </Item>
}