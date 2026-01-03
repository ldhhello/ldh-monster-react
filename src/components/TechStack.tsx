import styled from 'styled-components';
import { media } from '../design/media';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.4rem;

  flex-wrap: wrap;

  ${media.mobile`
    gap: 0.3rem;
    font-size: 0.95rem;
  `}
  ${media.mobileSmall`
    font-size: 0.87rem;
  `}
`;

type ContainerProps = {
  color: string,
  textColor: string,
}

const Item = styled.div<ContainerProps>`
  padding-left: 0.52rem;
  padding-right: 0.52rem;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;

  /* From https://css.glass */
  //background: rgba(255, 255, 255, 0.46);
  background: ${({color}) => color};
  color: ${({textColor}) => textColor};
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.11);

  transition: all 0.2s ease-out;

  &:hover {
    box-shadow: 0 5px 18px rgba(0, 0, 0, 0.17);
    cursor: default;
  }
`;

export default function TechStack({list}: {list: string[]}) {
  const hash = (name: string) => {
    const MOD = 998244353;
    let res = 0;

    for (let i=0; i<1000; i++) {
      for (let ch of name) {
        let ascii = ch.charCodeAt(0) % 256;
        let xor = 153 ^ (i%256);
        ascii ^= xor;
        res = (res * 256 + ascii) % MOD;
      }
    }

    return res;
  }

  const getUniqueColor = (name: string) => {
    const lightness = 0.93;
    const chroma = 0.02;
    const hue = hash(name) / 998244353 * 360 * 10 % 360;

    const textLightness = 0.6276;
    const textChroma = 0.1488;

    return {
      color: `oklch(${lightness} ${chroma} ${hue})`,
      textColor: `oklch(${textLightness} ${textChroma} ${hue})`,
    };
  };

  return <Container>
    { list.map(item => <Item {...getUniqueColor(item)}>{item}</Item>) }
  </Container>
}