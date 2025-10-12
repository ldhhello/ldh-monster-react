import styled from 'styled-components';
import profile from '../assets/profile-image.jpg';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4.5rem;
`

const ProfileImg = styled.img`
  width: 14rem;
  height: 14rem;
  border-radius: 19px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.54rem;
  h1 {
    margin-bottom: 0.83rem;
  }
  p {
    width: 22rem;
    word-wrap: break-word;
    font-size: 1.1rem;
  }
`;

export default function ProfileBox() {
  return <Container>
    <ProfileImg src={profile} />

    <InnerContainer>
      <h1>이동현 | Donghyun Lee</h1>

      <p>안녕하세요! 저는 이동현입니다. </p>
      <p>
        저는 어릴 때부터 IT 기술에 흥미를 느껴 알고리즘, 컴퓨터 통신, 웹 기술 등
        다양한 기술을 공부해왔습니다.
      </p>
      <p>
        현재는 경희대학교 컴퓨터공학과에 재학 중이며 다양한 프로젝트를 진행 중에 있습니다.
      </p>
    </InnerContainer>
  </Container>
}