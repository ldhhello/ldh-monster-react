import styled from 'styled-components';
import geoAlt from '../assets/geo-alt.svg';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 13rem;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  height: 20rem;
  box-sizing: border-box;
  padding: 0.7rem;
  transform: rotate(-3deg);

  /* From https://css.glass */
  background: rgba(255, 255, 255, 0);
  border-radius: 10px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(9.3px);
  -webkit-backdrop-filter: blur(9.3px);
`;
const InnerContainer = styled.p`
  display: flex;
  flex-direction: row;
  font-size: 1.6rem;
  gap: 0.7rem;
  width: 20rem;
  font-family: 'KyoboHand';
`;

type Props = {
  image: string,
  explain: string,
  reversed?: boolean
};

export default function ExplainBox({image, explain, reversed}: Props) {
  return <Container>
    <Image src={image} />
    <InnerContainer>
      <img src={geoAlt} />
      {explain}
    </InnerContainer>
  </Container>
}