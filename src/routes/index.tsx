import React from 'react';
import ProjectItem from '../components/ProjectItem';
import dimiMonsterImage from '../assets/DIMIMONSTER.png';

export default function Index() {
  return <>
    <ProjectItem
      title="DIMIMONSTER"
      subtitle="(2024)"
      techStack={["React", "CRA"]}
      image={dimiMonsterImage} />
  </>
}