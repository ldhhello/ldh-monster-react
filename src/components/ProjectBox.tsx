import styled from 'styled-components';
import ProjectItem, {type Props as ProjectType} from './ProjectItem';
import { media } from '../design/media';

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

type Props = {
  list: ProjectType[]
}

export default function ProjectBox({ list }: Props) {
  return <Container>
    {list.map((p, idx) => <ProjectItem key={idx} {...p} />)}
  </Container>
}