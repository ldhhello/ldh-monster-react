import styled from 'styled-components';
import instagramIcon from '../assets/instagram.svg';
import githubIcon from '../assets/github.svg';
import codeSlashIcon from '../assets/code-slash.svg';
import chatSquareDotsIcon from '../assets/chat-square-dots.svg';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem;
  gap: 1rem;

  img {
    height: 1.08rem;
  }
`;

export default function LinkBox() {
  return <Container>
    <a href="https://www.instagram.com/ldhhello"><img src={instagramIcon}/></a>
    <a href="https://www.github.com/ldhhello"><img src={githubIcon}/></a>
    <a href="https://www.acmicpc.net/user/ldhhello"><img src={codeSlashIcon}/></a>
    <a href="https://blog.naver.com/ldhhello"><img src={chatSquareDotsIcon}/></a>
  </Container>
}