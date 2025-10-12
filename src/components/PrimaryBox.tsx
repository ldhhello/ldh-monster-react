import styled from 'styled-components';
import ProfileBox from './ProfileBox';
import LinkBox from './LinkBox';

const Container = styled.div`
  position: relative; // for down arrow

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
  background-color: #f0f6f7;
`;
const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function PrimaryBox() {
  return <Container>
    <InnerContainer>
      <ProfileBox />
      <LinkBox />
    </InnerContainer>
  </Container>
}