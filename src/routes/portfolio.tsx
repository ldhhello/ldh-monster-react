import ProjectItem from '../components/ProjectItem';
import CompetitionItem from '../components/CompetitionItem';
import { styled } from 'styled-components';
import ProjectBox from '../components/ProjectBox';

import dimiMonsterImage from '../assets/DIMIMONSTER.png';
import projectList from "../data/projectList.json"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    padding: 0;
    margin-top: 3rem;
  }
`;

export default function Portfolio() {
  return <Container>
    <div style={{height: '14rem'}}/>
    <h1>Projects</h1>
    <ProjectBox>
      {projectList.map(p => <ProjectItem {...p} />)}
    </ProjectBox>

    <hr />
    <h1>Competitions</h1>

    <ul>
      <CompetitionItem logoImage={dimiMonsterImage}>
        세종정보올림피아드 시범대회 <strong>금상</strong> (2019)
      </CompetitionItem>
      <CompetitionItem logoImage={dimiMonsterImage} biggerImage>
        세종정보올림피아드 시범대회 <strong>금상</strong> (2019)
      </CompetitionItem>
      <CompetitionItem logoImage={dimiMonsterImage}>
        세종정보올림피아드 시범대회 <strong>금상</strong> (2019)
      </CompetitionItem>
    </ul>

    <hr />
  </Container>
}