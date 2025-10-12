import ProjectItem from '../components/ProjectItem';
import dimiMonsterImage from '../assets/DIMIMONSTER.png';
import CompetitionItem from '../components/CompetitionItem';
import ExplainBox from '../components/ExplainBox';
import PrimaryBox from '../components/PrimaryBox';

export default function Index() {
  return <>
    <PrimaryBox />

    <h1>Projects</h1>
    <ProjectItem
      title="DIMIMONSTER"
      year={2024}
      techStack={["React", "CRA"]}
      image={dimiMonsterImage} />

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

    <ExplainBox image="/images/project/dimimonster.png" explain="디미몬스터" />
    <ExplainBox image="/images/project/dimimonster.png" explain="디미몬스터" reversed />
    <ExplainBox image="/images/project/dimimonster.png" explain="디미몬스터" />
    <ExplainBox image="/images/project/dimimonster.png" explain="디미몬스터" reversed />
  </>
}