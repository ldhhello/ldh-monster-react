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

const Item = styled.div`
  padding-left: 0.52rem;
  padding-right: 0.52rem;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;

  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.46);
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(9.3px);
  -webkit-backdrop-filter: blur(9.3px);
`;

export default function TechStack({list}: {list: string[]}) {
  return <Container>
    { list.map(item => <Item>{item}</Item>) }
  </Container>
}