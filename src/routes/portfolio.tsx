import { useEffect } from 'react';

import CompetitionItem from '../components/CompetitionItem';
import { styled } from 'styled-components';
import ProjectBox from '../components/ProjectBox';
import { media } from '../design/media';

import projectList from "../data/projectList.json"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    padding: 0;

    ${media.mobileSmall`
      width: 100vw;
    `}
  }
`;

export default function Portfolio() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return <Container>
    <div style={{height: '14rem'}}/>

    <h1>Projects</h1>
    <ProjectBox list={projectList} />

    <hr />
    <h1>Competitions</h1>

    <div style={{height: '3rem'}}/>

    <ul>
      <CompetitionItem logoImage="/images/competition/Sejong.svg">
        세종정보올림피아드 시범대회 <strong>금상</strong> (2019)
      </CompetitionItem>
      <CompetitionItem logoImage="/images/competition/KOI.png">
        한국정보올림피아드 중등부 <strong>은상</strong> (2021)
      </CompetitionItem>
      <CompetitionItem logoImage="/images/competition/DIMI.png">
        전국 중학생 IT 올림피아드 <strong>금상</strong> (2021)
      </CompetitionItem>
      <CompetitionItem logoImage="/images/competition/APIO2022.png" biggerImage>
        APIO 2022 Egypt <strong>한국 11등, Unofficial 동메달</strong>
      </CompetitionItem>
      <CompetitionItem logoImage="/images/competition/KOI.png">
        한국정보올림피아드 고등부 <strong>은상</strong> (2024)
      </CompetitionItem>
      <CompetitionItem logoImage="/images/competition/IOI.png">
        국제정보올림피아드 계절학교 <strong>전 과정 수료</strong> (2021~2024)
      </CompetitionItem>
    </ul>

    <hr />
  </Container>
}