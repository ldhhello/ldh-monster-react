import styled from 'styled-components';
import ProjectItem, {type Props as ProjectType} from './ProjectItem';
import { media } from '../design/media';
import { useState } from 'react';
import arrowImg from '../assets/arrow-down-short.svg';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  max-width: 82rem;

  box-sizing: border-box;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 5rem;
  gap: 2rem;

  ${media.tabletBig`
    grid-template-columns: 1fr 1fr;
    max-width: 54rem;
  `}
  ${media.tabletSmall`
    max-width: 48rem;
  `}
  ${media.mobile`
    grid-template-columns: 1fr;
    padding-left: 0;
    padding-right: 0;
    gap: 0.5rem;
  `}
`;

const ArrowButton = styled.button`
  //background-color: red;
  border: none;
  box-sizing: border-box;

  width: 100%;
  margin-top: 2rem;

  cursor: pointer;
  /* From https://css.glass */
  background: rgba(247, 246, 245, 0.46);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

  padding-top: 7px;
  padding-bottom: 7px;
  img {
    height: 35px;
  }
`;

type Props = {
  list: ProjectType[]
}

export default function ProjectBox({ list }: Props) {
  const maxShowCount = 6; // 펼치기 전에 최대로 보여줄 개수

  const [showAll, setShowAll] = useState(false);

  const showList = showAll ? list : list.slice(0, maxShowCount);

  return <>
    <Container>
      {showList.map((p, idx) => <ProjectItem key={idx} {...p} />)}
    </Container>
    {!showAll && <ArrowButton onClick={() => setShowAll(showAll => !showAll)}>
      <img src={arrowImg} />
    </ArrowButton>}
  </>
}