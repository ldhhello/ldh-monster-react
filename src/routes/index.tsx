import React from 'react';
import ProjectItem from '../components/ProjectItem';
import dimiMonsterImage from '../assets/DIMIMONSTER.png';
import CompetitionItem from '../components/CompetitionItem';

export default function Index() {
  return <>
    <ProjectItem
      title="DIMIMONSTER"
      subtitle="(2024)"
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
  </>
}