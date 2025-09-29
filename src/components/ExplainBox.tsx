import styled from 'styled-components';
import geoAlt from '../assets/geo-alt.svg';

type ContainerProps = {
  reversed?: boolean
}
const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: ${({reversed}) => reversed ? 'row-reverse' : 'row'};
  gap: 13rem;
  align-items: center;
  justify-content: center;
`;

type ImageProps = {
  reversed?: boolean
}
const Image = styled.img<ImageProps>`
  height: 20rem;
  box-sizing: border-box;
  padding: 0.7rem;
  transform: rotate(${({reversed}) => reversed ? '2deg' : '-3deg'});

  /* From https://css.glass */
  background: rgba(255, 255, 255, 0);
  border-radius: 10px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(9.3px);
  -webkit-backdrop-filter: blur(9.3px);
`;

type InnerProps = {
  reversed?: boolean
}
const InnerContainer = styled.p<InnerProps>`
  display: flex;
  flex-direction: row;
  font-size: 1.6rem;
  gap: 0.7rem;
  width: 20rem;
  font-family: 'KyoboHand';
  justify-content: ${({reversed}) => reversed ? 'end' : 'start'};
`;

type Props = {
  image: string,
  explain: string,
  reversed?: boolean
};

export default function ExplainBox({image, explain, reversed}: Props) {
  return <Container reversed={reversed}>
    <Image src={image} reversed={reversed} />
    <InnerContainer reversed={reversed}>
      <img src={geoAlt} />
      {explain}
    </InnerContainer>
  </Container>
}