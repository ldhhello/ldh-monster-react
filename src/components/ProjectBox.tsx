import styled from 'styled-components';
import ProjectItem, {type Props as ProjectType} from './ProjectItem';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  max-width: 90rem;

  box-sizing: border-box;
  padding-left: 8rem;
  padding-right: 8rem;
  padding-top: 5rem;
  gap: 2rem;
`;

type Props = {
  list: ProjectType[]
}

export default function ProjectBox({ list }: Props) {
  return <Container>
    {list.map(p => <ProjectItem {...p} />)}
  </Container>
}