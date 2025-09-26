import ProjectItem from '../components/ProjectItem';
import CompetitionItem from '../components/CompetitionItem';
import { styled } from 'styled-components';
import ProjectBox from '../components/ProjectBox';

import dimiMonsterImage from '../assets/projectImg/dimimonster.png';
import disasterEscapeImage from '../assets/projectImg/disasterescape.png';
import dongmawolImage from '../assets/projectImg/dongmawol.jpg';
import minesweeperImage from '../assets/projectImg/minesweeper.png';
import osongStudioImage from '../assets/projectImg/osongstudio.png';
import picknpickImage from '../assets/projectImg/picknpick.png';
import TechStack from '../components/TechStack';

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

export default function Me() {
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