import styled from 'styled-components';
import ProjectItem, {type Props as ProjectType} from './ProjectItem';

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
`;

type Props = {
  list: ProjectType[]
}

export default function ProjectBox({ list }: Props) {
  return <Container>
    {list.map(p => <ProjectItem {...p} />)}
  </Container>
}